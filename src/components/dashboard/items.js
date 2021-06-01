import Item from './item';

const Items = ({data}) => <div className="feeds">
    {data.map(item => <Item key={item.url} item={item} />)}
</div>;

export default Items;