import Checkbox, { IsServicesValidCheckbox, IsServiceExampleValidCheckbox } from './checkbox';
import ApiLink from './apiLink';
import LastChecked from './lastChecked';
import { OrganisationLabel, DeveloperLabel } from './labelLink';
import Title from './title';

const Item = ({ item, help }) => <div className="item">
    <h3><OrganisationLabel item={item} /></h3>

    <div className="developer">
        <span className="label"><Title help={help}>Developer</Title></span>
        <DeveloperLabel item={item} />
    </div>

    <hr />

    <div className="row">
        <div className="col">
            <span className="label"><Title help={help}>Endpoint up</Title></span>
            <Checkbox isChecked={item.isUp} errorMessage={''} positiveMessage={'Live'} />
        </div>
        <div className="col">
            <span className="label"><Title help={help}>Services feed</Title></span>
            <IsServicesValidCheckbox item={item} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <span className="label"><Title help={help}>{`Service {id} feed`}</Title></span>
            <IsServiceExampleValidCheckbox item={item} />
        </div>
        <div className="col">
            <span className="label"><Title help={help}>Search enabled</Title></span>
            <Checkbox isChecked={item.isSearchEnabled} errorMessage={item.searchEnabledMessage} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <span className="label"><Title help={help}>Last checked</Title></span>
            <LastChecked item={item} />
        </div>
        <div className="col">
            <span className="label"><Title help={help}>Summary</Title></span>
            -
        </div>
    </div>

    <div className="row">
        <div className="col">
            <span className="label"><Title help={help}>Explore</Title></span>
            <ApiLink item={item} />
        </div>
    </div>
</div>;

export default Item;