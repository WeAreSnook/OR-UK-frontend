import { getTimeDiffMessage, getDateText, getTimeTaken, dbStringToUtc } from './utilities';

const LastChecked = ({ item }) => {

    const { checkIsRunning, lastCheck, timeTaken } = item;
    const utcLastCheck = dbStringToUtc(lastCheck);
    const date = getDateText(utcLastCheck);
    const diff = getTimeDiffMessage(utcLastCheck);
    const time = getTimeTaken(timeTaken);

    if (checkIsRunning || !lastCheck)
        return <span title={`Started check at ${date} (${diff}).`}>Checking...</span>;

    return <span title={`${date} (took: ${time})`}>{diff}</span>;
};

export default LastChecked;