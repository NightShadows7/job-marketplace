import type { FormEvent } from "react";
import { useState } from "react";
import type { JobRequest } from "../types/job";

type CreateJobModalProps = {
    onClose: () => void;
    onCreate: (job: JobRequest) => void;
};

const cities = [
    "Lisbon",
    "Porto",
    "Braga",
    "Coimbra",
];

function CreateJobModal({
    onClose,
    onCreate,
}: CreateJobModalProps) {
    const [service, setService] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [durationMin, setDurationMin] = useState("");
    const [price, setPrice] = useState("");
    const [urgent, setUrgent] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newJob: JobRequest = {
            id: crypto.randomUUID(),
            service: service.trim(),
            city,
            startsAt: new Date(`${date}T${time}`).toISOString(),
            durationMin: Number(durationMin),
            priceCents: Number(price),
            urgent,
        };

        onCreate(newJob);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
        }}>
            <div className="modal">
                <div className="modal-title">Create New Request</div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="service">Service</label>
                        <input
                            className="form-input"
                            id="service"
                            type="text"
                            placeholder="e.g. Plumbing"
                            value={service}
                            onChange={(event) => setService(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="city">City</label>
                        <select
                            className="form-input"
                            id="city"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            required
                        >
                            <option value="">Select a city</option>
                            {cities.map((cityOption) => (
                                <option key={cityOption} value={cityOption}>{cityOption}</option>
                            ))}    
                        </select> 
                    </div>

                    <div className="grid-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="date">Date</label>
                            <input 
                                className="form-input"
                                id="date"
                                type="date"
                                value={date}
                                onChange={(event) => setDate(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="time">Time</label>
                            <input
                                className="form-input"
                                id="time"
                                type="time"
                                value={time}
                                onChange={(event) => setTime(event.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="duration">Duration (minutes)</label>
                            <input 
                                className="form-input"
                                id="duration"
                                type="number"
                                min="1"
                                value={durationMin}
                                onChange={(event) => setDurationMin(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="price">Price (cents)</label>
                            <input 
                                className="form-input"
                                id="price"
                                type="number"
                                min="1"
                                step={1}
                                placeholder="e.g. 4500"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group urgent-group">
                            <input 
                                id="urgent"
                                type="checkbox"
                                checked={urgent}
                                onChange={(event) => setUrgent(event.target.checked)}
                            />
                            <label className="form-label" htmlFor="urgent">Urgent request</label>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-ghost"
                                onClick={onClose}
                            >Cancel</button>

                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateJobModal;