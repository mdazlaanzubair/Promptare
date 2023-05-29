"use client";

import { prompt_segments } from "@utils/constants";
import Select from "react-select";

const CategoryFilters = ({ setSelectedCategory }) => {
  const categoryFilter = prompt_segments;

  return (
    <Select
      placeholder="Filter by segments"
      options={categoryFilter}
      onChange={setSelectedCategory}
    />
  );
};

export default CategoryFilters;
