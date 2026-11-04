import { useEffect, useState } from "react";
import type { JobRequest } from "./types/job";
import CityFilter from "./components/CityFilter";
import JobCard from "./components/JobCard";
import {jobs as initialJobs} from "./data/jobs";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  const [jobs, setJobs] = useState<JobRequest[]>(initialJobs);

  const [selectedCity, setSelectedCity] = useState(
    "All Cities"
  );

  const [isLoading, setIsLoading] = useState(true);

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = jobs .filter((job) => {
    return (
      selectedCity === "All Cities" || job.city === selectedCity
    );
  }) .sort((a, b) => 
        new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
      );

  const handleAccept = (id: string) => {
    setJobs((currentJobs) => currentJobs.filter((job) => job.id !== id)
    );

    setSuccessMessage("Request accepted successfully");
  };

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Available Requests</h1>
        <p>Search available requests and accept services that interest you.</p>
      </header>

      {successMessage && (
        <div className="success-message" role="status">
          {successMessage}
        </div>
      )}

      <CityFilter
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="results-info">
            <p>Showing {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "request" : "requests"}
              {selectedCity !== "All Cities" && ` in ${selectedCity}`}
            </p>
          </div>

          {filteredJobs.length > 0 ? (
            <section className="jobs-list">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onAccept={handleAccept}
                />
              ))}
            </section>
          ) : (
            <div className="empty-state">
              <h2>There are no available requests</h2>

              <p>
                {jobs.length === 0
                ? "No requests to accept."
                : `No requests available for ${selectedCity}. Try another one.`}
              </p>
            </div>
          )}
        </>
      )}


    </main>
  );
}

export default App;