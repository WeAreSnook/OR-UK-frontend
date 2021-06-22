import GenericContentContainer from './GenericContentContainer';
import { Link } from 'react-router-dom';

const CaseStudyRelatedLinkContent = ({ slugfield = '', description, showDescription = false, article }) => {

    if (!article)
        return null;

    const { title } = article;

    return <div>
        <h2 className='case-study-heading'>Other relevent case studies</h2>
        
        <div class='case-study-related'>
            <Link to={`/community/case-studies/${slugfield}`}><h3>{title}</h3></Link>
            <p>
                {description}
            </p>
        </div>
    </div>;
};

const CaseStudyRelatedLink = ({ link }) => {
    if (!link)
        return null;

    return <>
        <GenericContentContainer 
            cmsLocation={`/case-studies?slugfield=${link.url}`}
            articleType="CaseStudy"
            ContentComponent={CaseStudyRelatedLinkContent}
            NotFoundComponent={null}
        />
        <div>
            <h2 className='case-study-heading'>Share your case study about adopting Open Referral UK?</h2>
            
            <div>
                <a href="mailto:hello@openreferraluk.org" class="button button-primary">Contact us to share your case studies</a> 
            </div>
        </div>
    </>;
};

export default CaseStudyRelatedLink;