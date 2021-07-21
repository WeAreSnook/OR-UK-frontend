import Checkbox, { IsServicesValidCheckbox, IsServiceExampleValidCheckbox, IsSearchEnabled } from './checkbox';
import ApiLink from './apiLink';
import LastChecked from './lastChecked';
import { OrganisationLabel, DeveloperLabel } from './labelLink';
import Title from './title';
import SummaryButton from './summaryButton';

const Item = ({ item, help }) => <div className="item">
    <h3><OrganisationLabel item={item} /></h3>

    <div className="developer">
        <div className="label"><Title help={help}>Developer</Title></div>
        <DeveloperLabel item={item} />
    </div>

    <hr />

    <div className="row">
        <div className="col">
            <div className="label"><Title help={help}>Endpoint up</Title></div>
            <Checkbox isChecked={item.isUp} errorMessage={''} positiveMessage={'Live'} />
        </div>
        <div className="col">
            <div className="label"><Title help={help}>Services feed</Title></div>
            <IsServicesValidCheckbox item={item} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="label"><Title help={help}>{`Service {id} feed`}</Title></div>
            <IsServiceExampleValidCheckbox item={item} />
        </div>
        <div className="col">
            <div className="label"><Title help={help}>Searchable</Title></div>
            <IsSearchEnabled item={item} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="label"><Title help={help}>Last checked</Title></div>
            <LastChecked item={item} />
        </div>
        <div className="col">
            <div className="label"><Title help={help}>Summary</Title></div>
            <SummaryButton summary={item.summary} />
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="label"><Title help={help}>Explore</Title></div>
            <ApiLink item={item} />
        </div>
    </div>
</div>;

export default Item;