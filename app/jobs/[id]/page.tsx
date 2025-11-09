import { notFound } from "next/navigation";
import JobDetailsHeader from "@/components/JobDetailsHeader";
import JobDetailsContent from "@/components/JobDetailsContent";
import JobDetailsFooter from "@/components/JobDetailsFooter";
import jobsData from "@/data/data.json";

interface JobDetailsPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  const job = jobsData.find((j) => j.id === parseInt(params.id));

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-20 md:pb-24 bg-light-grey dark:bg-midnight">
      <div className="container mx-auto px-6 md:px-[39px] lg:px-[165px] max-w-[1440px] -mt-[40px] md:-mt-[45px]">
        <JobDetailsHeader job={job} />
        <JobDetailsContent job={job} />
        <JobDetailsFooter job={job} />
      </div>
    </main>
  );
}
