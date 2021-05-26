const Checked = ({ label }) => <span class='checked'>{label}</span>;
const Unchecked = ({ label }) => <span class='unchecked'>{label}</span>;

const Checkbox = ({isChecked, positiveMessage, negativeMessage, message }) => 
    isChecked 
    ? <Checked label={positiveMessage || 'Yes'} /> 
    : <Unchecked label={negativeMessage || 'No'} />;

export default Checkbox;