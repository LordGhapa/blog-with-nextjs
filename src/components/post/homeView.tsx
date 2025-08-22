"use client";

import {
  ALL_CATEGORIES_QUERYResult,
  ALL_POSTS_QUERYResult,
  ALL_TAGS_QUERYResult,
} from "../../../sanity.types";
import Filter from "../filter";
import CardContainer from "./cardContainer";
import { useState } from "react";

interface HomeViewProps {
  initialData: ALL_POSTS_QUERYResult;
  allCategories: ALL_CATEGORIES_QUERYResult;
  allTags: ALL_TAGS_QUERYResult;
}
export default function HomeView({
  allCategories,
  allTags,
  initialData,
}: HomeViewProps) {
  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilterChange = (filteredPosts: ALL_POSTS_QUERYResult) => {
    setFilteredData(filteredPosts);
  };

  return (
    <>
      <Filter
        posts={initialData}
        categories={allCategories}
        tags={allTags}
        onFilterChange={handleFilterChange}
      />
      <CardContainer posts={filteredData} />
    </>
  );
}
