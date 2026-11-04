import type { JobRequest } from "../types/job";
import { formatDate, formatDuration, formatPrice } from "../utils/formatters";

type JobCardProps = {    
    job: JobRequest;
    onAccept: (id: string) => void;
};

function JobCard({ job, onAccept }: JobCardProps) {
    return (
        <article className="job-card">
            <div className="job-card-header">
                <div>
                    <h2>{job.service}</h2>
                    <p className="job-city">{job.city}</p>
                </div>

                {job.urgent && (
                    <span className="urgent-badge">Urgent</span>
                )}
            </div>

            <div className="job-details">
                <p>
                    <strong>Date:</strong> {formatDate(job.startsAt)}
                </p>

                <p>
                    <strong>Duration:</strong> {formatDuration(job.durationMin)}
                </p>

                <p>
                    <strong>Price:</strong> {formatPrice(job.priceCents)}
                </p>
            </div>

            <button
            className="accept-button"
            onClick={() => onAccept(job.id)}
            >
                Accept
            </button>
        </article>
    );
}

export default JobCard;
