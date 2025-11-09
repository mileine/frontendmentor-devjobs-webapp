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
      <div className="bg-white dark:bg-very-dark-blue rounded-md p-8 pt-12 relative hover:shadow-xl transition-shadow cursor-pointer group">
        {/* Company Logo */}
        <div
          className="absolute -top-6 w-12 h-12 rounded-2xl flex items-center justify-center"
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
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-dark-grey text-sm">
            <span>{job.postedAt}</span>
            <span className="w-1 h-1 bg-dark-grey rounded-full"></span>
            <span>{job.contract}</span>
          </div>

          <h3 className="text-very-dark-blue dark:text-white text-xl font-bold group-hover:text-dark-grey dark:group-hover:text-grey transition-colors">
            {job.position}
          </h3>

          <p className="text-dark-grey">{job.company}</p>

          <p className="text-violet font-bold pt-8">{job.location}</p>
        </div>
      </div>
    </Link>
  );
}
