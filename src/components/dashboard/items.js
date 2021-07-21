import Item from './item';

const Items = ({ data, help }) => <div className="feeds">
    {data.map(item => <Item key={item.url} item={item} help={help} />)}
</div>;

export default Items;