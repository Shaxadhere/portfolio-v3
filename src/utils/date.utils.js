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

export const sortProjectsByDate = (projects, order = "desc") => {
    const monthMap = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    return projects.sort((a, b) => {
        const [monthA, yearA] = a.date.split(" ");
        const [monthB, yearB] = b.date.split(" ");

        const dateA = new Date(Number(yearA), monthMap[monthA]);
        const dateB = new Date(Number(yearB), monthMap[monthB]);

        return order === "asc" ? dateA - dateB : dateB - dateA;
    });
}
