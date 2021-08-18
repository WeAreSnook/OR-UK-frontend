import CaseStudy from './CaseStudy';
import GenericContentContainer from './GenericContentContainer';

const CaseStudyPage = ({ slugField, contentRef }) => <GenericContentContainer 
    articleClassName="case-study" 
    cmsLocation={`/case-studies?slugfield=${slugField}`}
    articleType="CaseStudy"
    parent={{ path: `/community/case-studies`, title: `Case studies` }}
    ContentComponent={CaseStudy}
    contentRef={contentRef}
/>;

export default CaseStudyPage;