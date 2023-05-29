"use client";
import CategoryFilters from "@components/CategoryFilters";
import SearchInput from "@components/SearchInput";
import { searchByCategory, searchByText } from "@utils/feedFilters";
import { useEffect, useState } from "react";
import FeedCard from "./FeedCard";

const Feeds = ({ promptData }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    label: "All",
    value: "All",
  });
  const [filteredFeeds, setFilteredFeeds] = useState([...promptData]);

  // 1. perform search by keywords over prompts
  useEffect(() => {
    const prompts = searchByText(promptData, searchText);
    setFilteredFeeds(prompts);
  }, [searchText]);

  // 2. perform filtering by categories over prompts
  useEffect(() => {
    const prompts = searchByCategory(promptData, selectedCategory.value);
    setFilteredFeeds(prompts);
  }, [selectedCategory]);

  return (
    <div id="feeds-section" className="bg-base-200 mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-3 items-center justify-end">
        <div className="col-span-1">
          <CategoryFilters setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="col-span-1">
          <button
            type="button"
            className="btn btn-link btn-sm capitalize shrink"
            onClick={() =>
              setSelectedCategory({
                label: "All",
                value: "All",
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                clipRule="evenodd"
              />
            </svg>
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-10">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredFeeds &&
          filteredFeeds.map((feed, index) => (
            <FeedCard
              key={index}
              setSearchText={setSearchText}
              setSelectedCategory={setSelectedCategory}
              feed={feed}
            />
          ))}
      </div>
    </div>
  );
};

export default Feeds;
