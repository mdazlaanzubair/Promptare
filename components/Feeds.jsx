"use client";
import CategoryFilters from "@components/CategoryFilters";
import SearchInput from "@components/SearchInput";
import { filterByCategory, searchByText } from "@utils/feedFilters";
import { useEffect, useState } from "react";
import FeedCardSkeleton from "./FeedCardSkeleton";
import FeedCard from "./FeedCard";

const Feeds = () => {
  const [searchText, setSearchText] = useState("");
  const [allFeeds, setAllFeeds] = useState([]);
  const [filteredFeeds, setFilteredFeeds] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // 1. fetching prompts from database
  useEffect(() => {
    const fetchPrompts = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllFeeds(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrompts("/api/prompt");
  }, []);

  // 2. setting filtered prompts after fetching from database
  useEffect(() => setFilteredFeeds(allFeeds), [allFeeds]);

  // 3. perform search by keywords over filtered prompts
  useEffect(() => {
    const prompts = searchByText(allFeeds, searchText);
    setFilteredFeeds(prompts);
  }, [searchText]);

  // 4. perform search by categories over filtered prompts
  useEffect(() => {
    const prompts = filterByCategory(allFeeds, selectedFilter);
    setFilteredFeeds(prompts);
  }, [selectedFilter]);

  return (
    <div className="bg-gradient-to-tl from-base-100 via-gray-200 to-base-100 mx-auto p-5 lg:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-3 items-center">
            <div className="col-span-2">
              <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </div>
            <div className="col-span-1">
              <CategoryFilters setSelectedFilter={setSelectedFilter} />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFeeds.length === 0
              ? [1, 2, 3].map((count, index) => (
                  <FeedCardSkeleton key={index} />
                ))
              : filteredFeeds.map((feed, index) => (
                  <FeedCard
                    key={index}
                    setSearchText={setSearchText}
                    feed={feed}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
