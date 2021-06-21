import HtmlSection from '../htmlsection';
import SideMenu from '../sidemenu';
import PageTitle from './PageTitle';
import BackButton from './BackButton';
import ReadNextLink from './ReadNextLink';

const GenericContent = ({ description, showDescription = false, article, articleClassName, parent, RelatedLink = ReadNextLink }) => {

    if (!article)
        return null;

    const { title, sections = [], ReadNextLink: link } = article;

    const sectionHeadings = sections.map(section => section.sectionHeading);

    return <main id="content" className="main-container">
        <PageTitle title={title} />
        <div className={`page-container flex-container`}>
            <SideMenu subMenu={sectionHeadings} />
            <article className={`flex-right ${articleClassName}`}>
                <BackButton parent={parent} />
                <h1>{title}</h1>
                {showDescription && !!description && <p><small>{description}</small></p>}
                <div className="body">
                    <HtmlSection sections={sections} />
                </div>
                {!!link && <hr />}
                <RelatedLink link={link} />
            </article>
        </div>
    </main>;
};

export default GenericContent;