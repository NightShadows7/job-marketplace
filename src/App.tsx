import { useEffect, useState } from "react";
import type { JobRequest } from "./types/job";
import CityFilter from "./components/CityFilter";
import JobCard from "./components/JobCard";
import {jobs as initialJobs} from "./data/jobs";
import "./App.css";
import Loading from "./components/Loading";
import CreateJobModal from "./components/CreateJobModal";

function App() {

  /* SETTERS */

  const [jobs, setJobs] = useState<JobRequest[]>(initialJobs);

  const [selectedCity, setSelectedCity] = useState(
    "All Cities"
  );

  const [isLoading, setIsLoading] = useState(true);

  const [successMessage, setSuccessMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  /* LOADING */

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedCity]);

  /* FILTERS */

  const filteredJobs = jobs .filter((job) => {
    return (
      selectedCity === "All Cities" || job.city === selectedCity
    );
  }) .sort((a, b) => 
        new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
      );
  
  /* ACCEPT REQUEST */

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

  /* NEW REQUEST */

  const handleCreateJob = (newJob: JobRequest) => {
    setJobs((currentJobs) => [...currentJobs, newJob]);

    setSelectedCity(newJob.city);

    setSuccessMessage("Request created successfully");
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Job Marketplace</h1>
        <p>Search available requests and accept services that interest you.</p>
      </header>

      {successMessage && (
        <div className="success-message" role="status">
          {successMessage}
        </div>
      )}

      <div className="filter-actions">
        <CityFilter
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
        />

        <button
        className="create-request-btn"
        onClick={() => setIsModalOpen(true)}>Create Request</button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="results-info">
            <p>Showing {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "request" : "requests"}
              {selectedCity !== "All Cities" && ` in ${selectedCity}`}
            </p>

            <span className="total-requests">
            {jobs.length} requests
          </span>
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

      {isModalOpen && (
        <CreateJobModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateJob}
        />
      )}


    </main>
  );
}

export default App;