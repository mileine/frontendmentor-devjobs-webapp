"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string, location: string, fullTimeOnly: boolean) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch(search, location, fullTimeOnly);
    setShowModal(false);
  };

  const handleModalSearch = () => {
    handleSearch();
  };

  return (
    <>
      {/* Desktop Search Bar */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex bg-white dark:bg-very-dark-blue rounded-md overflow-hidden items-stretch mb-8 md:mb-12 relative z-10"
      >
        {/* Search Input - Title/Company/Expertise */}
        <div className="flex items-center gap-4 w-[40%] px-6 lg:px-8 py-7 border-r border-dark-grey/20 dark:border-white/20">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fillRule="nonzero"/>
          </svg>
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-very-dark-blue dark:text-white placeholder:text-dark-grey dark:placeholder:text-white/50 outline-none text-base font-normal"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center gap-4 w-[30%] px-6 lg:px-8 py-7 border-r border-dark-grey/20 dark:border-white/20">
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fillRule="nonzero"/>
          </svg>
          <input
            type="text"
            placeholder="Filter by location…"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-very-dark-blue dark:text-white placeholder:text-dark-grey dark:placeholder:text-white/50 outline-none text-base font-normal"
          />
        </div>

        {/* Full Time Checkbox and Search Button */}
        <div className="flex items-center justify-between gap-4 w-[30%] px-6 lg:px-8 py-4">
          <label className="flex items-center gap-3 md:gap-4 cursor-pointer min-w-0">
            <div className="relative flex-shrink-0">
              <input
                type="checkbox"
                checked={fullTimeOnly}
                onChange={(e) => setFullTimeOnly(e.target.checked)}
                className="peer sr-only"
              />
              <div className="w-6 h-6 bg-very-dark-blue/10 dark:bg-white/10 hover:bg-very-dark-blue/25 dark:hover:bg-white/25 rounded-sm flex items-center justify-center peer-checked:bg-violet transition-colors">
                {fullTimeOnly && (
                  <svg width="15" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="3" fill="none" fillRule="evenodd"/>
                  </svg>
                )}
              </div>
            </div>
            <span className="text-very-dark-blue dark:text-white font-bold text-base hidden xl:inline truncate">
              Full Time Only
            </span>
            <span className="text-very-dark-blue dark:text-white font-bold text-base xl:hidden truncate">
              Full Time
            </span>
          </label>

          <button
            type="submit"
            className="bg-violet hover:bg-light-violet text-white px-5 md:px-7 lg:px-9 py-3 md:py-4 rounded-md font-bold text-base transition-colors flex-shrink-0 whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </form>

      {/* Mobile Search Bar */}
      <div className="md:hidden bg-white dark:bg-very-dark-blue rounded-md overflow-hidden mb-8 flex items-center relative z-10">
        <div className="flex items-center gap-4 flex-1 px-6 py-4">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fillRule="nonzero"/>
          </svg>
          <input
            type="text"
            placeholder="Filter by title…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-very-dark-blue dark:text-white placeholder:text-dark-grey dark:placeholder:text-white/50 outline-none text-base font-normal"
          />
        </div>

        {/* Filter Button */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-6 py-4 border-l border-dark-grey/20 dark:border-white/20"
          aria-label="Open filters"
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.59.865.865 0 00.59.25h3.557a.86.86 0 00.858-.858v-7.484a2.19 2.19 0 01.382-1.116l6.685-9.202a.833.833 0 00.068-.884.86.86 0 00-.764-.455z" fill="#6E8098" fillRule="nonzero"/>
          </svg>
        </button>

        {/* Search Button */}
        <button
          type="button"
          onClick={() => handleSearch()}
          className="bg-violet hover:bg-light-violet text-white p-4 rounded-md m-4 transition-colors"
          aria-label="Search"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#FFF" fillRule="nonzero"/>
          </svg>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {showModal && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-very-dark-blue rounded-md w-full max-w-[327px] p-6">
            {/* Location Input */}
            <div className="mb-6">
              <div className="flex items-center gap-4 pb-6 border-b border-dark-grey/20 dark:border-white/20">
                <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fillRule="nonzero"/>
                </svg>
                <input
                  type="text"
                  placeholder="Filter by location…"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-very-dark-blue dark:text-white placeholder:text-dark-grey dark:placeholder:text-white/50 outline-none text-base font-normal"
                />
              </div>
            </div>

            {/* Full Time Checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-4 cursor-pointer pb-6 border-b border-dark-grey/20 dark:border-white/20">
                <div className="relative flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={fullTimeOnly}
                    onChange={(e) => setFullTimeOnly(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-6 h-6 bg-very-dark-blue/10 dark:bg-white/10 hover:bg-very-dark-blue/25 dark:hover:bg-white/25 rounded-sm flex items-center justify-center peer-checked:bg-violet transition-colors">
                    {fullTimeOnly && (
                      <svg width="15" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="3" fill="none" fillRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-very-dark-blue dark:text-white font-bold text-base">
                  Full Time Only
                </span>
              </label>
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={handleModalSearch}
              className="w-full bg-violet hover:bg-light-violet text-white py-4 rounded-md font-bold text-base transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}
