import { useState, useEffect } from 'react';
import HtmlSection from '../htmlsection';
import SideMenu from '../sidemenu';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import BackButton from './BackButton';
import NotFound from '../errorpage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GenericContentPage = ({ cmsLocation, articleType, parent }) => {
    const [article, setArticle] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(null);
    const [sectionHeadings, setSectionHeadings] = useState([]);

    useEffect(() => {
        fetch(new URL(cmsLocation, BASE_URL).href)
            .then(res => res.json())
            .then(jsonRes => setData(jsonRes))
            .catch(err => setIsError(err))
    }, [cmsLocation]);

    useEffect(() => {
        // check we have data, no error, and if data is array, array has elements

        if (data && !isError) {
            if ((!Array.isArray(data) || data.length)) {
                const pageData = Array.isArray(data) ? data[0] : data;
                setArticle(pageData[articleType]);
                setIsNotFound(false);
            }
            else {
                setIsNotFound(true);
            }
        };

        if (article) {
            setSectionHeadings(article.sections.map(section => section.sectionHeading));
        }

    }, [article, data, isError, articleType]);

    if (isError || isNotFound)
        return <NotFound parent={{ path: `/community/case-studies`, title: `Case studies` }} />;

    if (!article)
        return null;

    let readNextLink = <></>
    if (article.ReadNextLink) {
        readNextLink = (<><hr />
            <Link to={article.ReadNextLink.url}>
                {article.ReadNextLink.TextToDisplay}
            </Link></>);
    }

    return <main id="content" className="main-container">
        <PageTitle title={article.title} />
        <div className="page-container flex-container">
            <SideMenu subMenu={sectionHeadings} />
            <article className="flex-right">
                <BackButton parent={parent} />
                <h1>{article.title}</h1>
                <HtmlSection sections={article.sections} />
                {readNextLink}
            </article>
        </div>
    </main>;
}

export default GenericContentPage;