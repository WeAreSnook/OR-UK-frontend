const LinkLabel = ({ label, url }) => !!url ? <a href={url} target='_blank'>{label}</a> : <span>{label}</span>;
const Checked = ({ label, url }) => <div className='checked'><LinkLabel {...{ label, url }} /></div>;
const Unchecked = ({ label, url, message }) => <div className='unchecked' tabIndex='0'><LinkLabel {...{ label, url }} /> {!!message && <div className='message'>{message}</div>}</div>;

const Checkbox = ({ isChecked, positiveMessage, negativeMessage, errorMessage, url }) =>
    isChecked
        ? <Checked label={positiveMessage || 'Yes'} url={url} />
        : <Unchecked label={negativeMessage || 'No'} message={errorMessage} url={url} />;

export default Checkbox;

export const IsServicesValidCheckbox = ({ item }) =>
    <Checkbox isChecked={item.isServicesValid} errorMessage={item.servicesMessage} positiveMessage={'Valid'} url={`${item.url}/services`} />;

export const IsServiceExampleValidCheckbox = ({ item }) =>
    <Checkbox isChecked={item.isServiceExampleValid} errorMessage={item.serviceExampleMessage} positiveMessage={'Valid'} url={!!item.serviceExampleIdentifier ? `${item.url}/services/${item.serviceExampleIdentifier}` : undefined} />;