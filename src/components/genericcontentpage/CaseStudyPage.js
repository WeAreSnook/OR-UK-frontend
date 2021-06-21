import CaseStudy from './CaseStudy';
import GenericContentContainer from './GenericContentContainer';

const CaseStudyPage = ({ slugField }) => <GenericContentContainer 
    articleClassName="case-study" 
    cmsLocation={`/case-studies?slugfield=${slugField}`}
    articleType="CaseStudy"
    parent={{ path: `/community/case-studies`, title: `Case studies` }}
    ContentComponent={CaseStudy}
/>;

export default CaseStudyPage;