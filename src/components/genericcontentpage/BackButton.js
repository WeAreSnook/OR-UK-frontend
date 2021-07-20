import { Link } from 'react-router-dom';

const BackButton = ({ parent }) => {
    if (!parent)
        return null;
    return <Link className='button button-tertiary button-back' to={parent.path}>{parent.title}</Link>;
};

export default BackButton;