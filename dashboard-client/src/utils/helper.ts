import moment from "moment";

export const formatDate = (date: string) => {
    // Parse the input date string into a Moment.js object
    const parsedDate = moment(date);
    const relativeTime = parsedDate.fromNow(); // e.g., "5 days ago"
    return relativeTime;
};

export const formatLongText = (text: string) => {
    return `${text.slice(0, 5)}...`;
};
