import Checkbox from './checkbox';
import ApiLink from './apiLink';
import LastChecked from './lastChecked';

const Item = ({item}) => <div className="item">
    <h3>{item.label}</h3>

    <div className="developer">
        <span className="label">Developer</span>
        <span className="value">{item.organisationLabel}</span>
    </div>

    <hr />

    <div className="row">
        <div className="col">
            <span className="label">Endpoint up</span>
            <Checkbox isChecked={item.isUp} message={''} positiveMessage={'Live'} />
        </div>
        <div className="col">
            <span className="label">Service feed</span>
            <Checkbox isChecked={item.isServicesValid} message={item.servicesMessage} positiveMessage={'Valid'} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <span className="label">Service {`{id}`} feed</span>
            <Checkbox isChecked={item.isServiceExampleValid} message={item.serviceExampleMessage} positiveMessage={'Valid'} />
        </div>
        <div className="col">
            <span className="label">Search enabled</span>
            <Checkbox isChecked={item.isSearchEnabled} message={item.searchEnabledMessage} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <span className="label">Last checked</span>
            <LastChecked item={item} />
        </div>
        <div className="col">
            <span className="label">Summary</span>
            -
        </div>
    </div>

    <div className="row">
        <div className="col">
            <span className="label">Explore</span>
            <ApiLink item={item} />
        </div>
    </div>
</div>;

export default Item;