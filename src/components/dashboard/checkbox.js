const Checked = ({ label }) => <span className='checked'>{label}</span>;
const Unchecked = ({ label }) => <span className='unchecked'>{label}</span>;

const Checkbox = ({isChecked, positiveMessage, negativeMessage, message }) => 
    isChecked 
    ? <Checked label={positiveMessage || 'Yes'} /> 
    : <Unchecked label={negativeMessage || 'No'} />;

export default Checkbox;