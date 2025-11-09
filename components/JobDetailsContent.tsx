import { Job } from "@/types/job";

interface JobDetailsContentProps {
  job: Job;
}

export default function JobDetailsContent({ job }: JobDetailsContentProps) {
  return (
    <div className="bg-white dark:bg-very-dark-blue rounded-md p-8 md:p-12 mb-20">
      {/* Job Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-dark-grey text-sm mb-4">
          <span>{job.postedAt}</span>
          <span className="w-1 h-1 bg-dark-grey rounded-full"></span>
          <span>{job.contract}</span>
        </div>

        <h1 className="text-very-dark-blue dark:text-white text-3xl md:text-4xl font-bold mb-4">
          {job.position}
        </h1>

        <p className="text-violet font-bold text-sm">{job.location}</p>

        <a
          href={job.apply}
          className="inline-block mt-8 bg-violet hover:bg-light-violet text-white px-8 py-4 rounded-md font-bold transition-colors w-full md:w-auto text-center"
        >
          Apply Now
        </a>
      </div>

      {/* Description */}
      <div className="mb-10">
        <p className="text-dark-grey dark:text-grey leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Requirements */}
      <div className="mb-10">
        <h2 className="text-very-dark-blue dark:text-white text-xl font-bold mb-6">
          Requirements
        </h2>
        <p className="text-dark-grey dark:text-grey leading-relaxed mb-6">
          {job.requirements.content}
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {job.requirements.items.map((item, index) => (
            <li key={index} className="text-dark-grey dark:text-grey leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* What You Will Do */}
      <div>
        <h2 className="text-very-dark-blue dark:text-white text-xl font-bold mb-6">
          What You Will Do
        </h2>
        <p className="text-dark-grey dark:text-grey leading-relaxed mb-6">
          {job.role.content}
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          {job.role.items.map((item, index) => (
            <li key={index} className="text-dark-grey dark:text-grey leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
