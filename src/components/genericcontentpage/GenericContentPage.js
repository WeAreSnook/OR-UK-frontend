import GenericContentContainer from './GenericContentContainer';
import GenericContent from './GenericContent';

const GenericContentPage = (props) => <GenericContentContainer {...props} ContentComponent={GenericContent} />;

export default GenericContentPage;