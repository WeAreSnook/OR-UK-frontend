import Checkbox from './checkbox';
import ApiLink from './apiLink';
import LastChecked from './lastChecked';
import { OrganisationLabel, DeveloperLabel } from './labelLink';

const Row = ({ item }) => <tr>
    <td><OrganisationLabel item={item} /></td>
    <td><DeveloperLabel item={item} /></td>
    <td><Checkbox isChecked={item.isUp} message={''} positiveMessage={'Live'} /></td>
    <td><Checkbox isChecked={item.isServicesValid} message={item.servicesMessage} positiveMessage={'Valid'} /></td>
    <td><Checkbox isChecked={item.isServiceExampleValid} message={item.serviceExampleMessage} positiveMessage={'Valid'} /></td>
    <td><Checkbox isChecked={item.isSearchEnabled} message={item.searchEnabledMessage} /></td>
    <td><LastChecked item={item} /></td>
    <td> - </td>
    <td><ApiLink item={item} /></td>
</tr>;

export default Row;