import moment from "moment";

export const calculateDuration = (startDate = new Date) => {
    const start = moment(startDate); // Start date
    const end = moment(); // Current date

    const years = end.diff(start, 'years');
    start.add(years, 'years');

    const months = end.diff(start, 'months');
    start.add(months, 'months');

    const days = end.diff(start, 'days');

    return `${years} years, ${months} months, ${days} days`;
};