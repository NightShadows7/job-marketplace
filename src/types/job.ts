export type JobRequest = {
    id: string;
    service: string;
    city: string;
    startsAt: string;
    durationMin: number;
    priceCents: number;
    urgent: boolean;
};