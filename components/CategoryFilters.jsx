"use client";

import { prompt_segments } from "@utils/constants";

const CategoryFilters = ({ selectedFilter, setSelectedFilter }) => {
  const categories = prompt_segments;

  return (
    <>
      <div className="dropdown flex lg:hidden">
        <label tabIndex={0} className="btn btn-primary m-1">
          Prompt Segments
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => setSelectedFilter("All")}>
            <a
              className={`text-sm hover-bordered ${
                selectedFilter === "All" ? "active" : ""
              }`}
            >
              All
            </a>
          </li>
          {categories.map((category, index) => (
            <li key={index} onClick={() => setSelectedFilter(category.value)}>
              <a
                className={`text-xs hover-bordered ${
                  selectedFilter === category.value ? "active" : ""
                }`}
              >
                {category.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="menu bg-base-100 rounded-box pt-0 shadow-lg hidden lg:flex">
        <p className="font-bold text-lg py-3 mt-0 text-center">
          <span>Prompt Segments</span>
        </p>
        <li onClick={() => setSelectedFilter("All")}>
          <a
            className={`text-sm hover-bordered ${
              selectedFilter === "All" ? "active" : ""
            }`}
          >
            All
          </a>
        </li>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setSelectedFilter(category.value)}>
            <a
              className={`text-xs hover-bordered ${
                selectedFilter === category.value ? "active" : ""
              }`}
            >
              {category.value}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryFilters;
