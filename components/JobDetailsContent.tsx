import { Job } from "@/types/job";

interface JobDetailsContentProps {
  job: Job;
}

export default function JobDetailsContent({ job }: JobDetailsContentProps) {
  return (
    <div className="bg-white dark:bg-very-dark-blue rounded-md p-10 md:p-12 mb-20 md:mb-24">
      {/* Job Header */}
      <div className="mb-10 md:mb-12">
        <div className="flex items-center gap-3 text-dark-grey text-base mb-2">
          <span>{job.postedAt}</span>
          <span className="w-1 h-1 bg-dark-grey rounded-full"></span>
          <span>{job.contract}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-11 md:mb-10">
          <div>
            <h1 className="text-very-dark-blue dark:text-white text-[28px] md:text-[28px] font-bold mb-3 md:mb-4 leading-tight">
              {job.position}
            </h1>
            <p className="text-violet font-bold text-sm mb-8 md:mb-0">{job.location}</p>
          </div>

          <a
            href={job.apply}
            className="inline-block bg-violet hover:bg-light-violet text-white px-7 md:px-9 py-4 rounded-md font-bold text-base transition-colors w-full md:w-auto text-center whitespace-nowrap"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10 md:mb-12">
        <p className="text-dark-grey dark:text-grey leading-[26px] text-base">
          {job.description}
        </p>
      </div>

      {/* Requirements */}
      <div className="mb-10 md:mb-12">
        <h2 className="text-very-dark-blue dark:text-white text-xl font-bold mb-7">
          Requirements
        </h2>
        <p className="text-dark-grey dark:text-grey leading-[26px] text-base mb-8">
          {job.requirements.content}
        </p>
        <ul className="space-y-2">
          {job.requirements.items.map((item, index) => (
            <li key={index} className="text-dark-grey dark:text-grey leading-[26px] text-base flex">
              <span className="text-violet font-bold mr-8 flex-shrink-0">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What You Will Do */}
      <div>
        <h2 className="text-very-dark-blue dark:text-white text-xl font-bold mb-7">
          What You Will Do
        </h2>
        <p className="text-dark-grey dark:text-grey leading-[26px] text-base mb-8">
          {job.role.content}
        </p>
        <ol className="space-y-2">
          {job.role.items.map((item, index) => (
            <li key={index} className="text-dark-grey dark:text-grey leading-[26px] text-base flex">
              <span className="text-violet font-bold mr-8 flex-shrink-0">{index + 1}</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
