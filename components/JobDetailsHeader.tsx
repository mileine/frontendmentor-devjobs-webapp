import Image from "next/image";
import { Job } from "@/types/job";

interface JobDetailsHeaderProps {
  job: Job;
}

export default function JobDetailsHeader({ job }: JobDetailsHeaderProps) {
  // Remove './' from logo path for Next.js Image
  const logoSrc = job.logo.replace('./', '/');
  
  return (
    <div className="bg-white dark:bg-very-dark-blue rounded-md -mt-10 mb-6 md:mb-8 flex flex-col md:flex-row items-center md:items-stretch overflow-hidden relative z-10">
      {/* Company Logo Section */}
      <div
        className="w-full md:w-[140px] h-[140px] md:h-auto flex items-center justify-center rounded-b-none md:rounded-bl-md"
        style={{ backgroundColor: job.logoBackground }}
      >
        <Image
          src={logoSrc}
          alt={job.company}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Company Info Section */}
      <div className="flex-1 flex flex-col md:flex-row items-center md:items-center justify-between p-10 md:p-10 md:px-10 w-full">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-very-dark-blue dark:text-white text-xl md:text-2xl font-bold mb-3">
            {job.company}
          </h2>
          <p className="text-dark-grey">{job.website}</p>
        </div>

        <a
          href={job.website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet/10 hover:bg-violet/30 dark:bg-white/10 dark:hover:bg-white/20 text-violet dark:text-white px-5 md:px-6 py-4 rounded-md font-bold transition-colors text-base whitespace-nowrap"
        >
          Company Site
        </a>
      </div>
    </div>
  );
}
