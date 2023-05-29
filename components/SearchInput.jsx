"use client";

const SearchInput = ({ searchText, setSearchText }) => {
  return (
    <form className="group input-search w-full mx-auto flex flex-row flex-wrap rounded-box px-3 py-2 justify-between items-center gap-3 shadow-sm bg-base-100">
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="flex-grow">
        <input
          type="search"
          placeholder="Search prompts here..."
          className="border-none outline-none w-full bg-transparent"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </div>
    </form>
  );
};

export default SearchInput;
