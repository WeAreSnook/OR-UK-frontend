import Checkbox from './checkbox';

const Row = ({item}) => <tr>
    <td>{item.label}</td>
    <td>{item.organisationLabel}</td>
    <td><Checkbox isChecked={item.isUp} message={''} positiveMessage={'Live'} /></td>
    <td><Checkbox isChecked={item.isServicesValid} message={item.servicesMessage} positiveMessage={'Valid'} /></td>
    <td><Checkbox isChecked={item.isServiceExampleValid} message={item.serviceExampleMessage} positiveMessage={'Valid'} /></td>
    <td><Checkbox isChecked={item.isSearchEnabled} message={item.searchEnabledMessage} /></td>
    <td> - </td>
    <td> - </td>
</tr>;

export default Row;