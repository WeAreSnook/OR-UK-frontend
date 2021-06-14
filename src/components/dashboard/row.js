import Checkbox, { IsServicesValidCheckbox, IsServiceExampleValidCheckbox, IsSearchEnabled } from './checkbox';
import ApiLink from './apiLink';
import LastChecked from './lastChecked';
import { OrganisationLabel, DeveloperLabel } from './labelLink';
import SummaryButton from './summaryButton';

const Row = ({ item }) => <tr>
    <td><OrganisationLabel item={item} /></td>
    <td><DeveloperLabel item={item} /></td>
    <td><Checkbox isChecked={item.isUp} errorMessage={''} positiveMessage={'Live'} /></td>
    <td><IsServicesValidCheckbox item={item} /></td>
    <td><IsServiceExampleValidCheckbox item={item} /></td>
    <td><IsSearchEnabled item={item} /></td>
    <td><LastChecked item={item} /></td>
    <td><SummaryButton summary={item.summary} /></td>
    <td><ApiLink item={item} /></td>
</tr>;

export default Row;