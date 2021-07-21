export const getUrlAndLabel = (item, prefix) => {
    const url = item[`${prefix}Url`];
    const label = item[`${prefix}Label`];
    return { url, label };
};

const LabelLink = ({ url, label }) =>
    !!url
        ? <a href={url} target='_blank' rel='noopener noreferrer'>{label}</a>
        : <span>{label}</span>;

export default LabelLink;

export const OrganisationLabel = ({ item }) => LabelLink(getUrlAndLabel(item, 'organisation'));

export const DeveloperLabel = ({ item }) => LabelLink(getUrlAndLabel(item, 'developer'));