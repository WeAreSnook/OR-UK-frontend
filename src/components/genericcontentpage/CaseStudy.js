import CaseStudyRelatedLink from './CaseStudyRelatedLink';
import GenericContent from './GenericContent';

const CaseStudy = (props) => <GenericContent {...props} showDescription={true} RelatedLink={CaseStudyRelatedLink} />;

export default CaseStudy;