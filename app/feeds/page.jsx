"use client";

import CategoryFilters from "@components/CategoryFilters";
import Feeds, { FeedSkeleton } from "@components/Feeds";
import GradientText from "@components/GradientText";
import SearchInput from "@components/SearchInput";
import { useEffect, useState } from "react";

const FeedsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [allFeeds, setAllFeeds] = useState([]);
  const [filteredFeeds, setFilteredFeeds] = useState(allFeeds);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const searchByText = (keyword) => {
    const filteredPrompts = allFeeds.filter((feed) => {
      const lowerCaseKeyword = keyword.toLowerCase();
      // Check if the title, prompt, or tags contain the keyword
      const matchesPrompt = feed.prompt
        .toLowerCase()
        .includes(lowerCaseKeyword);
      const matchesTags = feed.tags.some((tag) =>
        tag.toLowerCase().includes(lowerCaseKeyword)
      );

      return matchesPrompt || matchesTags;
    });

    setFilteredFeeds(filteredPrompts);
  };

  const filterByCategory = (prompts, category) => {
    if (category === "All") {
      setFilteredFeeds(allFeeds);
    } else {
      const filteredPrompts = prompts.filter(
        (prompt) => prompt.category === category
      );

      setFilteredFeeds(filteredPrompts);
    }
  };

  // 1. fetching prompts from database
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setAllFeeds(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrompts();
  }, []);

  // 2. setting filtered prompts after fetching from database
  useEffect(() => setFilteredFeeds(allFeeds), [allFeeds]);

  // 3. perform search by keywords over filtered prompts
  useEffect(() => searchByText(searchText), [searchText]);

  // 4. perform search by categories over filtered prompts
  useEffect(() => filterByCategory(allFeeds, selectedFilter), [selectedFilter]);

  // 5. perform search by username over filtered prompts
  useEffect(() => filterByCategory(allFeeds, selectedFilter), [selectedFilter]);

  return (
    <section id="feeds-page">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-w-lg lg:max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">
              <GradientText text="Discover & Share" /> Prompts!
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-5">
              Scroll through the prompts below and get inspired to enhance your
              Chat GPT experience.
            </h2>
            <div className="flex flex-col pt-5 pb-3"></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tl from-base-100 via-gray-200 to-base-100 mx-auto p-5 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1">
            <CategoryFilters
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 gap-5 mb-5">
              <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
              {filteredFeeds.length === 0 ? (
                <FeedSkeleton />
              ) : (
                filteredFeeds?.map((feed, index) => (
                  <Feeds
                    key={index}
                    setSearchText={setSearchText}
                    feed={feed}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedsPage;
