 /* PRICE FROM CENTS TO EUROS */
 
 export const formatPrice = (priceCents: number): string => {
    return new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
    }).format(priceCents / 100);
 };

 /* DATE AND TIME TO PORTUGUESE FORMAT */

 export const formatDate = (date: string): string => {
    return new Intl.DateTimeFormat("pt-PT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Lisbon",
    }).format(new Date(date));
 };

 /* DURATION FROM MINUTES TO HOURS */

 export const formatDuration = (durationMin: number): string => {
    const hours = Math.floor(durationMin / 60);
    const minutes = durationMin % 60;

    if (hours === 0) {
        return `${minutes} min`;
    }

    if (minutes === 0) {
        return `${hours} h`;
    }

    return `${hours} h ${minutes} min`;
 };