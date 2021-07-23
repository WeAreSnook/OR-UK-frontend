import Row from './row';
import Title from './title';

const Table = ({ data, help }) => (
  <table className="feeds">
    <thead>
      <tr>
        <th scope="col">
          <Title help={help}>Organisation</Title>
        </th>
        <th scope="col">
          <Title help={help}>Developer</Title>
        </th>
        <th scope="col">
          <Title help={help}>Endpoint up</Title>
        </th>
        <th scope="col">
          <Title help={help}>Services feed</Title>
        </th>
        <th scope="col">
          <Title help={help}>{`Service {id} feed`}</Title>
        </th>
        <th scope="col">
          <Title help={help}>Searchable</Title>
        </th>
        <th scope="col">
          <Title help={help}>Last checked</Title>
        </th>
        <th scope="col">
          <Title help={help}>Summary</Title>
        </th>
        <th scope="col">
          <Title help={help}>Explore</Title>
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <Row key={item.url} item={item} />
      ))}
    </tbody>
  </table>
);

export default Table;