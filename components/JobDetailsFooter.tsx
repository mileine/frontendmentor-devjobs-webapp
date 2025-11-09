import { Job } from "@/types/job";

interface JobDetailsFooterProps {
  job: Job;
}

export default function JobDetailsFooter({ job }: JobDetailsFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-very-dark-blue">
      <div className="container mx-auto px-6 md:px-[39px] lg:px-[165px] max-w-[1440px] py-6 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="hidden md:block">
            <h3 className="text-very-dark-blue dark:text-white text-xl font-bold mb-1">
              {job.position}
            </h3>
            <p className="text-dark-grey">{job.company}</p>
          </div>

          <a
            href={job.apply}
            className="bg-violet hover:bg-light-violet text-white px-7 md:px-9 py-4 rounded-md font-bold text-base transition-colors w-full md:w-auto text-center whitespace-nowrap"
          >
            Apply Now
          </a>
        </div>
      </div>
    </footer>
  );
}
