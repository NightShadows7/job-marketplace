import type { JobRequest } from "../types/job";

export const jobs: JobRequest[] = [
    {
        id: "1", 
        service: "Plumbing", 
        city: "Porto", 
        startsAt: "2026-11-12T10:00:00Z", 
        durationMin: 60, 
        priceCents: 4500, 
        urgent: false
    },
    {
        id: "2", 
        service: "Electricity", 
        city: "Lisbon", 
        startsAt: "2026-11-12T14:30:00Z", 
        durationMin: 90, 
        priceCents: 7000, 
        urgent: true
    },
    {
        id: "3", 
        service: "Painting", 
        city: "Braga", 
        startsAt: "2026-11-13T09:00:00Z", 
        durationMin: 240, 
        priceCents: 18000, 
        urgent: false
    },

    {
        id: "4", 
        service: "Electricity", 
        city: "Porto", 
        startsAt: "2026-11-13T15:00:00Z", 
        durationMin: 120, 
        priceCents: 8500, 
        urgent: true
    },

    {
        id: "5", 
        service: "Plumbing", 
        city: "Braga", 
        startsAt: "2026-11-14T09:00:00Z", 
        durationMin: 75, 
        priceCents: 5000, 
        urgent: false
    },
];