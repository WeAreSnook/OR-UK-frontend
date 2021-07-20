const ApiLink = ({item}) => <>
    <a href={`https://tools.openreferraluk.org/ApiQuery/?endpoint=${item.url}`}>API</a>{' '}
    <a href={`https://validator.openreferraluk.org/?endpoint=${item.url}`}>Validation</a>
</>;

export default ApiLink;