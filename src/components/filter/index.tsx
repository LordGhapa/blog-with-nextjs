"use client";
import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { useReadPostsStore } from "@/app/store";
import { SearchIcon, XIcon } from "lucide-react";
import {
  ALL_CATEGORIES_QUERYResult,
  ALL_POSTS_QUERYResult,
  ALL_TAGS_QUERYResult,
} from "../../../sanity.types";
import AdvancedFilters from "./AdvancedFilters";
import { FilterState } from "./filterChip";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export type CategoryFilterValues = Record<string, FilterState>;
export type TagFilterValues = Record<string, FilterState>;
import { motion } from "framer-motion";
interface FilterProps {
  posts: ALL_POSTS_QUERYResult;
  categories: ALL_CATEGORIES_QUERYResult;
  tags: ALL_TAGS_QUERYResult;
  onFilterChange: (filteredPosts: ALL_POSTS_QUERYResult) => void;
}

export default function Filter({
  posts,
  categories,
  tags,
  onFilterChange,
}: FilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("filter");

  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [categoryFilters, setCategoryFilters] = useState<CategoryFilterValues>(
    {},
  );
  const [tagFilters, setTagFilters] = useState<TagFilterValues>({});

  const isUpdatingFromUrl = useRef(false);

  // Effect to synchronize URL search parameters TO the component's state
  useEffect(() => {
    isUpdatingFromUrl.current = true;

    const newSearchQuery = searchParams.get("search") || "";
    setSearchQuery(newSearchQuery);
    setInputValue(newSearchQuery);

    const newCatFilters: CategoryFilterValues = {};
    searchParams
      .get("cat_include")
      ?.split(",")
      .forEach((cat) => {
        if (cat) newCatFilters[cat] = FilterState.INCLUDE;
      });
    searchParams
      .get("cat_exclude")
      ?.split(",")
      .forEach((cat) => {
        if (cat) newCatFilters[cat] = FilterState.EXCLUDE;
      });
    setCategoryFilters(newCatFilters);

    const newTagFilters: TagFilterValues = {};
    searchParams
      .get("tag_include")
      ?.split(",")
      .forEach((tag) => {
        if (tag) newTagFilters[tag] = FilterState.INCLUDE;
      });
    searchParams
      .get("tag_exclude")
      ?.split(",")
      .forEach((tag) => {
        if (tag) newTagFilters[tag] = FilterState.EXCLUDE;
      });
    setTagFilters(newTagFilters);

    // const { getAllReadPosts } = useReadPostsStore();
    // console.log("todo ja lidos", getAllReadPosts());

    // Schedule a microtask to reset the flag after state updates have been processed.
    Promise.resolve().then(() => {
      isUpdatingFromUrl.current = false;
    });
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    const getFilters = (
      filters: CategoryFilterValues | TagFilterValues,
      state: FilterState,
    ) =>
      Object.entries(filters)
        .filter(([, s]) => s === state)
        .map(([key]) => key);

    const includedCategories = getFilters(categoryFilters, FilterState.INCLUDE);
    const excludedCategories = getFilters(categoryFilters, FilterState.EXCLUDE);
    const includedTags = getFilters(tagFilters, FilterState.INCLUDE);
    const excludedTags = getFilters(tagFilters, FilterState.EXCLUDE);

    return posts.filter((post) => {
      // Search filter
      const searchMatch =
        !searchQuery ||
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body?.toLowerCase().includes(searchQuery.toLowerCase());
      if (!searchMatch) return false;

      // Category filter
      const postCategorySlugs =
        post.categories?.map((c) => c.slug).filter(Boolean) || [];
      if (
        includedCategories.length > 0 &&
        !includedCategories.some((slug) => postCategorySlugs.includes(slug))
      ) {
        return false;
      }
      if (
        excludedCategories.length > 0 &&
        excludedCategories.some((slug) => postCategorySlugs.includes(slug))
      ) {
        return false;
      }

      // Tag filter
      const postTagSlugs = post.tags?.map((t) => t.slug).filter(Boolean) || [];
      if (
        includedTags.length > 0 &&
        !includedTags.every((slug) => postTagSlugs.includes(slug))
      ) {
        return false;
      }
      if (
        excludedTags.length > 0 &&
        excludedTags.some((slug) => postTagSlugs.includes(slug))
      ) {
        return false;
      }

      return true;
    });
  }, [searchQuery, categoryFilters, tagFilters, posts]);

  // Effect to synchronize the component's state TO the URL search parameters
  useEffect(() => {
    if (isUpdatingFromUrl.current) {
      return;
    }

    const newParams = new URLSearchParams();

    if (searchQuery) {
      newParams.set("search", searchQuery);
    }

    const catIncludes = Object.entries(categoryFilters)
      .filter(([, s]) => s === FilterState.INCLUDE)
      .map(([c]) => c);
    const catExcludes = Object.entries(categoryFilters)
      .filter(([, s]) => s === FilterState.EXCLUDE)
      .map(([c]) => c);

    if (catIncludes.length > 0) {
      newParams.set("cat_include", catIncludes.join(","));
    }
    if (catExcludes.length > 0) {
      newParams.set("cat_exclude", catExcludes.join(","));
    }

    const tagIncludes = Object.entries(tagFilters)
      .filter(([, s]) => s === FilterState.INCLUDE)
      .map(([t]) => t);
    const tagExcludes = Object.entries(tagFilters)
      .filter(([, s]) => s === FilterState.EXCLUDE)
      .map(([t]) => t);

    if (tagIncludes.length > 0) {
      newParams.set("tag_include", tagIncludes.join(","));
    }
    if (tagExcludes.length > 0) {
      newParams.set("tag_exclude", tagExcludes.join(","));
    }

    const newParamsString = newParams.toString();
    const currentParams = searchParams.toString();

    if (currentParams !== newParamsString) {
      router.replace(`${pathname}?${newParamsString}`, { scroll: false });
    }
  }, [
    searchQuery,
    categoryFilters,
    tagFilters,
    pathname,
    router,
    searchParams,
  ]);

  // Effect to debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  // Effect to notify parent component of filter changes
  useEffect(() => {
    onFilterChange(filteredPosts);
  }, [filteredPosts, onFilterChange]);

  const handleCategoryFilterChange = useCallback((category: string) => {
    setCategoryFilters((prev) => {
      const currentState = prev[category] || FilterState.NEUTRAL;
      const nextState = (currentState + 1) % 3;
      const newFilters = { ...prev };
      if (nextState === FilterState.NEUTRAL) {
        delete newFilters[category];
      } else {
        newFilters[category] = nextState;
      }
      return newFilters;
    });
  }, []);

  const handleTagFilterChange = useCallback((tag: string) => {
    setTagFilters((prev) => {
      const currentState = prev[tag] || FilterState.NEUTRAL;
      const nextState = (currentState + 1) % 3;
      const newFilters = { ...prev };
      if (nextState === FilterState.NEUTRAL) {
        delete newFilters[tag];
      } else {
        newFilters[tag] = nextState;
      }
      return newFilters;
    });
  }, []);

  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(() => {
    return (
      searchParams.has("cat_include") ||
      searchParams.has("cat_exclude") ||
      searchParams.has("tag_include") ||
      searchParams.has("tag_exclude")
    );
  });

  const handleClearFilters = useCallback(() => {
    setSearchQuery("");
    setCategoryFilters({});
    setTagFilters({});
  }, []);

  const toggleAdvancedFilters = () => {
    setIsAdvancedFiltersOpen((prev) => !prev);
  };

  const areFiltersActive =
    searchQuery !== "" ||
    Object.keys(categoryFilters).length > 0 ||
    Object.keys(tagFilters).length > 0;

  return (
    <div>
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className="mb-8 rounded-xl border bg-white p-6 dark:border-slate-700 dark:bg-slate-800/50"
      >
        <motion.div
          layoutId="filter"
          className="flex flex-col gap-4 md:flex-row"
        >
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder={t("searchStories")}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 pr-10 pl-10 transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700/50"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500 dark:text-slate-400" />
            </div>
            {areFiltersActive && (
              <button
                onClick={handleClearFilters}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 transition-colors hover:text-gray-700 dark:text-slate-400 dark:hover:text-white"
                aria-label={t("clearAllFilters")}
              >
                <XIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <button
            onClick={toggleAdvancedFilters}
            className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-700"
          >
            {t("advancedSearch")}{" "}
            <span
              className={`transform transition-transform duration-300 ${
                isAdvancedFiltersOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </motion.div>

        {isAdvancedFiltersOpen && (
          <AdvancedFilters
            categories={categories}
            tags={tags}
            categoryFilters={categoryFilters}
            tagFilters={tagFilters}
            onCategoryFilterChange={handleCategoryFilterChange}
            onTagFilterChange={handleTagFilterChange}
            onClearFilters={handleClearFilters}
          />
        )}
      </motion.div>
    </div>
  );
}
