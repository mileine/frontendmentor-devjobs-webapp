import { Job } from "@/types/job";

interface JobDetailsFooterProps {
  job: Job;
}

export default function JobDetailsFooter({ job }: JobDetailsFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-very-dark-blue py-6 px-6 md:px-10 lg:px-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="hidden md:block">
          <h3 className="text-very-dark-blue dark:text-white text-xl font-bold mb-1">
            {job.position}
          </h3>
          <p className="text-dark-grey">{job.company}</p>
        </div>

        <a
          href={job.apply}
          className="bg-violet hover:bg-light-violet text-white px-8 py-4 rounded-md font-bold transition-colors w-full md:w-auto text-center"
        >
          Apply Now
        </a>
      </div>
    </footer>
  );
}
