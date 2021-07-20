import { Link } from 'react-router-dom';

const ReadNextLink = ({ link }) => {
    if (!link)
        return null;

    return <Link to={link.url}>
        {link.TextToDisplay}
    </Link>;
};

export default ReadNextLink;