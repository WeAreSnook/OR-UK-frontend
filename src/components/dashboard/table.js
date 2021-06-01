import Row from './row';

const Table = ({ data }) => <table className="feeds">
    <thead>
        <tr>
            <th>Organisation</th>
            <th>Developer</th>
            <th>Endpoint up</th>
            <th>Service feed</th>
            <th>Service {`{id}`} feed</th>
            <th>Search enabled</th>            
            <th>Last checked</th>
            <th>Summary</th>
            <th>Explore</th>
        </tr>
    </thead>
    <tbody>
        {data.map(item => <Row key={item.url} item={item} />)}
    </tbody>
</table>;

export default Table;