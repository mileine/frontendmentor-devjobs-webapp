import SearchBar from "@/components/SearchBar";
import JobsContainer from "@/components/JobsContainer";
import jobsData from "@/data/data.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 md:px-10 lg:px-40 -mt-10">
        <SearchBar />
        <JobsContainer jobs={jobsData} />
      </div>
    </main>
  );
}
