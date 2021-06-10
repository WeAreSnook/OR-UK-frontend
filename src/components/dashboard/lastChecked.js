import SummaryButton from './summaryButton';

const getTimeMessage = (n, singular) => Math.round(n) === 1 ? `${Math.round(n)} ${singular} ago` : `${Math.round(n)} ${singular}s ago`;

const getTimeDiffMessage = (lastCheck) => {
    const now = Date.now();
    const timestamp = Date.parse(`${lastCheck}Z`);
    const diff = now - timestamp;

    const seconds = diff / 1000;

    if (Math.round(seconds) < 60)
        return getTimeMessage(seconds < 0 ? 0 : seconds, 'second');

    const minutes = seconds / 60;

    if (Math.round(minutes) < 60)
        return getTimeMessage(minutes, 'minute');

    const hours = minutes / 60;

    if (Math.round(hours) < 24)
        return getTimeMessage(hours, 'hour');

    const days = hours / 24;

    if (Math.round(days) < 365)
        return getTimeMessage(days, 'day');

    const years = days / 365;

    return getTimeMessage(years, 'year');
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatNumber = (n) => (n < 10) ? `0${n}` : `${n}`;

const getDateText = (lastCheck) => {
    const utcDate = `${lastCheck}.000Z`;  // ISO-8601 formatted date returned from server
    var localDate = new Date(utcDate);

    const year = localDate.getFullYear();
    const month = months[localDate.getMonth()];
    const day = localDate.getDate();
    const hour = formatNumber(localDate.getHours());
    const minute = formatNumber(localDate.getMinutes());
    const second = formatNumber(localDate.getSeconds());

    return `${day} ${month} ${year} ${hour}:${minute}:${second}`;
};

const getSeconds = milliseconds => (milliseconds / 1000).toFixed(2);

const LastChecked = ({ item }) => {

    const { checkIsRunning, lastCheck, timeTaken } = item;

    if (checkIsRunning || !lastCheck)
        return <span title={`Started running at ${getDateText(lastCheck)}. Not yet complete.`}>
            Running...
        </span>;

    return <span title={`${getDateText(lastCheck)} (took: ${getSeconds(timeTaken)}s)`}>
        {getTimeDiffMessage(lastCheck)}
    </span>;
};

export default LastChecked;