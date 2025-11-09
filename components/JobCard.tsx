import Link from "next/link";
import Image from "next/image";
import { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  // Remove './' from logo path for Next.js Image
  const logoSrc = job.logo.replace('./', '/');
  
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-white dark:bg-very-dark-blue rounded-md p-8 md:p-10 pt-12 md:pt-12 relative hover:shadow-xl transition-shadow cursor-pointer group min-h-[228px] md:min-h-[253px]">
        {/* Company Logo */}
        <div
          className="absolute -top-6 md:-top-6 left-8 md:left-10 w-[50px] h-[50px] rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: job.logoBackground }}
        >
          <Image
            src={logoSrc}
            alt={job.company}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Job Details */}
        <div className="space-y-3 md:space-y-4 flex flex-col h-full">
          <div className="flex items-center gap-3 text-dark-grey text-base leading-none">
            <span>{job.postedAt}</span>
            <span className="w-1 h-1 bg-dark-grey rounded-full"></span>
            <span>{job.contract}</span>
          </div>

          <h3 className="text-very-dark-blue dark:text-white text-xl leading-[1.25] font-bold group-hover:text-dark-grey dark:group-hover:text-grey transition-colors">
            {job.position}
          </h3>

          <p className="text-dark-grey text-base leading-none">{job.company}</p>

          <p className="text-violet font-bold text-sm leading-none pt-8 md:pt-11 mt-auto">{job.location}</p>
        </div>
      </div>
    </Link>
  );
}
