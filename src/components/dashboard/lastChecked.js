import { getTimeDiffMessage, getDateText, getTimeTaken, dbStringToUtc } from './utilities';

const LastChecked = ({ item }) => {

    const { checkIsRunning, lastCheck, timeTaken } = item;
    const utcLastCheck = dbStringToUtc(lastCheck);
    const date = getDateText(utcLastCheck);
    const diff = getTimeDiffMessage(utcLastCheck);
    const time = getTimeTaken(timeTaken);

    if (checkIsRunning || !lastCheck)
        return <span title={`Started check at ${date} (${diff}).`}>Checking...</span>;

    if (utcLastCheck < new Date(2019, 0, 1))
        return <span>Not run yet</span>;

    return <span title={`${date} (took: ${time})`}>{diff}</span>;
};

export default LastChecked;