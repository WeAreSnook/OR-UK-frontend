import { useEffect, useState } from 'react';
import * as qs from 'query-string';
import InjectHtml from '../home/InjectHtml';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Section = ({ section }) => {
    return <div>
        <h3>{section.sectionHeading}</h3>
        <InjectHtml itemKey={`section-${section.id}`} paragraphText={section.sectionBody} />
    </div>;
};

const Page = ({ page }) => {
    return <div>
        <h2>{page.title}</h2>
        {page.sections.map(section => <Section section={section} />)}
    </div>;
};

const Content = ({ slugfield, content }) => {
    if (!slugfield)
        return <p>Provide the slugfield in they query string (?slugfield={`{slugfield}`})</p>;

    if (!content || !content.length)
        return <p>No content found with the slugfield {slugfield}</p>;

    return content.map(c => <Page key={c.id} page={c.page} />);
};

const Preview = ({contentRef}) => {
    const [content, setContent] = useState({});
    const search = window.location.search;
    const params = qs.parse(search);
    const slugfield = params.slugfield;
    const contentPath = `/pages?slugfield=${slugfield}`;

    useEffect(() => {
        if (!slugfield)
            return;

        fetch(new URL(contentPath, BASE_URL).href)
            .then(res => res.json())
            .then(contentArray => setContent(contentArray))
            .catch(err => console.error(err))
    }, [slugfield, contentPath]);

    return <div className="page-container flex-container">
        <main id="content" className="main-container" ref={contentRef}>
            <article className="flex-right mb-1rem">
                <h1>Preview</h1>
                <Content {...{ slugfield, content }} />
            </article>
        </main>
    </div>;
};

export default Preview;