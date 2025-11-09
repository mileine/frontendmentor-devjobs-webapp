"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import JobsContainer from "@/components/JobsContainer";
import jobsData from "@/data/data.json";
import { Job } from "@/types/job";

export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData as Job[]);

  const handleSearch = (search: string, location: string, fullTimeOnly: boolean) => {
    const filtered = (jobsData as Job[]).filter((job) => {
      const searchTerm = search.toLowerCase();
      const locationTerm = location.toLowerCase();
      
      // Filter by title, company, or expertise (in description)
      const matchesSearch = !search || 
        job.position.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm);
      
      // Filter by location
      const matchesLocation = !location || 
        job.location.toLowerCase().includes(locationTerm);
      
      // Filter by contract type (Full Time)
      const matchesContract = !fullTimeOnly || 
        job.contract.toLowerCase() === "full time";
      
      return matchesSearch && matchesLocation && matchesContract;
    });
    
    setFilteredJobs(filtered);
  };

  return (
    <main className="min-h-screen bg-light-grey dark:bg-midnight">
      <div className="container mx-auto px-6 md:px-[39px] lg:px-[165px] max-w-[1440px] -mt-[40px] md:-mt-[45px]">
        <SearchBar onSearch={handleSearch} />
        <JobsContainer jobs={filteredJobs} />
      </div>
    </main>
  );
}
