"use client";

import { useState } from "react";
import Image from "next/image";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented
    console.log({ search, location, fullTimeOnly });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white dark:bg-very-dark-blue rounded-md shadow-lg flex flex-col md:flex-row items-center gap-4 md:gap-0 p-4 md:p-0"
    >
      {/* Search Input */}
      <div className="flex items-center gap-4 w-full md:w-1/3 md:px-6 md:border-r border-dark-grey/20">
        <Image
          src="/assets/desktop/icon-search.svg"
          alt="Search"
          width={24}
          height={24}
          className="hidden md:block"
        />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-very-dark-blue dark:text-white placeholder:text-dark-grey outline-none"
        />
      </div>

      {/* Location Input */}
      <div className="flex items-center gap-4 w-full md:w-1/3 md:px-6 md:border-r border-dark-grey/20">
        <Image
          src="/assets/desktop/icon-location.svg"
          alt="Location"
          width={24}
          height={24}
          className="hidden md:block"
        />
        <input
          type="text"
          placeholder="Filter by location…"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent text-very-dark-blue dark:text-white placeholder:text-dark-grey outline-none"
        />
      </div>

      {/* Full Time Checkbox and Search Button */}
      <div className="flex items-center justify-between w-full md:w-1/3 md:px-6">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            checked={fullTimeOnly}
            onChange={(e) => setFullTimeOnly(e.target.checked)}
            className="w-6 h-6 accent-violet cursor-pointer"
          />
          <span className="text-very-dark-blue dark:text-white font-bold hidden lg:block">
            Full Time Only
          </span>
          <span className="text-very-dark-blue dark:text-white font-bold lg:hidden">
            Full Time
          </span>
        </label>

        <button
          type="submit"
          className="bg-violet hover:bg-light-violet text-white px-8 py-3 rounded-md font-bold transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
