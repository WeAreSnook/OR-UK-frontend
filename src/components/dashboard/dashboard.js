import Items from './items';
import Table from './table';
import { useEffect, useState } from 'react';
import InjectHtml from '../home/InjectHtml';

const apiUrl = 'https://validator.openreferraluk.org/api';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const contentSlugfield = `dashboard-content`;
const contentPath = `/pages?slugfield=${contentSlugfield}`;
const helpSlugfield = `dashboard-help`;
const helpPath = `/pages?slugfield=${helpSlugfield}`;

const compareLabels = (a, b) => (a.label || '').localeCompare(b.label);

const sortData = (data) => {
    data.sort(compareLabels);
    return data;
};

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl);
        if (response.status === 200)
            return response.json();
        return [];
    }
    catch (err) {
        console.log('error ', err);
        return [];
    }
};

const parseContent = (contentArray) => {
    const content = contentArray.find(c => c.slugfield === contentSlugfield) || {};
    const { title, sections } = content.page;
    const header = (sections.find(s => s.sectionHeading === 'header') || {}).sectionBody;
    const footer = (sections.find(s => s.sectionHeading === 'footer') || {}).sectionBody;
    return { title, header, footer };
};

const parseHelp = (contentArray, slugfield) => {
    const content = contentArray.find(c => c.slugfield === slugfield) || {};
    const { title, sections = [] } = content.page;
    return sections.reduce((accumulator, s) => { accumulator[s.sectionHeading] = s.sectionBody; return accumulator; }, { title });
};

const Dashboard = ({ overrideData = undefined }) => {
    const [data, setData] = useState(overrideData || []);
    const [content, setContent] = useState({});
    const [help, setHelp] = useState({});

    useEffect(() => {
        if (!!overrideData)
            return;
        (async () => {
            const newData = sortData((await fetchData()) || []);
            setData(newData);
        })();
    }, [overrideData]);

    useEffect(() => {
        fetch(new URL(contentPath, BASE_URL).href)
            .then(res => res.json())
            .then(contentArray => setContent(parseContent(contentArray)))
            .catch(err => console.error(err))
    }, []);

    useEffect(() => {
        fetch(new URL(helpPath, BASE_URL).href)
            .then(res => res.json())
            .then(helpArray => setHelp(parseHelp(helpArray, helpSlugfield)))
            .catch(err => console.error(err))
    }, []);

    console.log('help', help);

    return <div className="page-container flex-container">
        <main id="content" className="main-container">
            <article className="flex-right mb-1rem">
                <h1>{content.title}</h1>
                <InjectHtml itemKey={`${contentSlugfield}-header`} paragraphText={content.header} />
            </article>

            <Items data={data} help={help} />
            <Table data={data} help={help} />

            <article className="flex-right">
                <InjectHtml itemKey={`${contentSlugfield}-header`} paragraphText={content.footer} />
            </article>
        </main>
    </div>;
};

export default Dashboard;