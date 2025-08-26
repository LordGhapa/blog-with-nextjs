import FilterChip from "./filterChip";
import { BookOpenIcon, TagIcon, SearchIcon, Eye } from "lucide-react";
import {
  ALL_CATEGORIES_QUERYResult,
  ALL_TAGS_QUERYResult,
} from "../../../sanity.types";
import { CategoryFilterValues, TagFilterValues } from "./index";
import { FilterState } from "./filterChip";
import { useTranslations } from "next-intl";

interface AdvancedFiltersProps {
  categories: ALL_CATEGORIES_QUERYResult;
  tags: ALL_TAGS_QUERYResult;
  categoryFilters: CategoryFilterValues;
  tagFilters: TagFilterValues;
  isReadFilter: FilterState;
  onCategoryFilterChange: (category: string) => void;
  onTagFilterChange: (tag: string) => void;
  onIsReadFilterChange: () => void;
  onClearFilters: () => void;
}

import React, { useState } from "react";

export default function AdvancedFilters({
  categories,
  tags,
  categoryFilters,
  tagFilters,
  isReadFilter,
  onCategoryFilterChange,
  onTagFilterChange,
  onIsReadFilterChange,
  onClearFilters,
}: AdvancedFiltersProps) {
  const t = useTranslations("filter");
  const [tagSearchQuery, setTagSearchQuery] = useState("");

  const filteredTags = tags.filter(
    (tag) =>
      tag.title &&
      tag.title.toLowerCase().includes(tagSearchQuery.toLowerCase()),
  );

  const handleClear = () => {
    onClearFilters();
    setTagSearchQuery("");
  };

  return (
    <div className="mt-6 border-t border-gray-200 pt-6 dark:border-slate-700/50">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {t("advancedFilters")}
        </h3>
        <button
          onClick={handleClear}
          className="rounded-md border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 transition-colors hover:text-orange-500 dark:text-slate-400 dark:hover:bg-slate-700/50"
        >
          {t("clearFilters")}
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-700/30 dark:text-slate-400">
        <span className="font-semibold text-gray-600 dark:text-slate-300">
          {t("howToUseFilters")}
        </span>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-slate-500 bg-slate-600"></div>
          <span>{t("firstClick")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-green-400 bg-green-500"></div>
          <span>{t("secondClick")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-red-400 bg-red-500"></div>
          <span>{t("thirdClick")}</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-800 dark:text-white">
            {t("read")} :
            <FilterChip
              label={
                <Eye className="h-5 w-5 text-gray-500 dark:text-slate-400" />
              }
              state={isReadFilter}
              onClick={onIsReadFilterChange}
            />
          </h4>
        </div>
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-800 dark:text-white">
            <BookOpenIcon className="h-5 w-5 text-gray-500 dark:text-slate-400" />
            {t("categories")}
          </h4>
          <div className="flex flex-wrap gap-3">
            {categories.map(
              (category) =>
                category.slug &&
                category.title && (
                  <FilterChip
                    key={category._id}
                    label={category.title}
                    state={
                      categoryFilters[category.slug] || FilterState.NEUTRAL
                    }
                    onClick={() =>
                      category.slug && onCategoryFilterChange(category.slug)
                    }
                  />
                ),
            )}
          </div>
        </div>

        <div>
          <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-800 dark:text-white">
            <TagIcon className="h-5 w-5 text-gray-500 dark:text-slate-400" />
            {t("tags")}
          </h4>
          <div className="relative mb-3">
            <input
              type="text"
              placeholder={t("searchTags")}
              value={tagSearchQuery}
              onChange={(e) => setTagSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500 dark:text-slate-400" />
            </div>
          </div>
          <div className="h-48 overflow-y-auto rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-900/50">
            <div className="flex flex-wrap gap-3">
              {filteredTags.map(
                (tag) =>
                  tag.slug &&
                  tag.title && (
                    <FilterChip
                      key={tag._id}
                      label={tag.title}
                      state={tagFilters[tag.slug] || FilterState.NEUTRAL}
                      onClick={() => tag.slug && onTagFilterChange(tag.slug)}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
