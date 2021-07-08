const LinkLabel = ({ label, url }) => !!url ? <a href={url} target='_blank' rel='noreferrer'>{label}</a> : <span>{label}</span>;

const Checked = ({ label, url, message, cssClassName = '' }) => <div className={`checked ${cssClassName}`}><LinkLabel {...{ label, url }} />  {!!message && <div className='message'>{message}</div>}</div>;
const PartialChecked = ({ label, url, message, cssClassName = '' }) => <div className={`partial-checked ${cssClassName}`} tabIndex='0'><LinkLabel {...{ label, url }} /> {!!message && <div className='message'>{message}</div>}</div>;
const Unchecked = ({ label, url, message, cssClassName = '' }) => <div className={`unchecked ${cssClassName}`} tabIndex='0'><LinkLabel {...{ label, url }} /> {!!message && <div className='message'>{message}</div>}</div>;

const Checkbox = ({ isChecked, positiveMessage, negativeMessage, url, errorMessage, successMessage = undefined }) =>
    isChecked
        ? <Checked label={positiveMessage || 'Yes'} message={successMessage} url={url} />
        : <Unchecked label={negativeMessage || 'No'} message={errorMessage} url={url} />;

export default Checkbox;

export const IsServicesValidCheckbox = ({ item }) =>
    <Checkbox isChecked={item.isServicesValid} errorMessage={item.servicesMessage} positiveMessage={'Valid'} url={`${item.url}/services`} />;

export const IsServiceExampleValidCheckbox = ({ item }) =>
    <Checkbox isChecked={item.isServiceExampleValid} errorMessage={item.serviceExampleMessage} positiveMessage={'Valid'} url={!!item.serviceExampleIdentifier ? `${item.url}/services/${item.serviceExampleIdentifier}` : undefined} />;

const cleanTestName = (name = '') => name.replace(/ Test/gi, '').replace(/ Search/gi, '');

export const IsSearchEnabled = ({ item }) => {
    const searchResults = item.searchResults || [];
    searchResults.sort((a, b) => cleanTestName(a.testName).localeCompare(cleanTestName(b.testName)));

    const message = <ul>
        {searchResults.map(r => <li key={r.testName}>{cleanTestName(r.testName)}: {r.success ? 'Yes' : r.errorMessage}</li>)}
    </ul>;

    const allSuccess = searchResults.every(r => r.success);
    if (allSuccess)
        return <Checked label={'Yes'} message={message} />;

    const partialSuccess = searchResults.some(r => r.success);
    if (partialSuccess)
        return <PartialChecked label={'Partial'} message={message} />;

    return <Unchecked label={'No'} message={message} />;
};