"use client";

import { useState } from "react";
import JobCard from "./JobCard";
import { Job } from "@/types/job";

interface JobsContainerProps {
  jobs: Job[];
}

export default function JobsContainer({ jobs }: JobsContainerProps) {
  const [visibleJobs, setVisibleJobs] = useState(12);

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 12);
  };

  return (
    <div className="pb-16 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-[11px] md:gap-y-16 lg:gap-x-[30px] lg:gap-y-16">
        {jobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {visibleJobs < jobs.length && (
        <div className="flex justify-center mt-8 md:mt-14">
          <button
            onClick={loadMore}
            className="bg-violet hover:bg-light-violet text-white px-8 md:px-9 py-4 rounded-md font-bold text-base transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
