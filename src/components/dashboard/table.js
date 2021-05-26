import Row from './row';

const Table = ({data}) => <table class="feeds">
    <thead>
        <th>Organisation</th>
        <th>Developer</th>
        <th>Endpoint up</th>
        <th>Service feed</th>
        <th>Service {`{id}`} feed</th>
        <th>Search enabled</th>
        <th>Summary</th>
        <th>Explore</th>
    </thead>
    <tbody>
        {data.map(item => <Row item={item} />)}
    </tbody>
</table>;

export default Table;