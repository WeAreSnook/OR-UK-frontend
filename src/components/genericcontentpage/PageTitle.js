import { useEffect, } from 'react';
import { useLocation } from 'react-router-dom';

const mainTitle = `Open Referral UK`;

const PageTitle = ({ title }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = `${!!title ? `${title} | ` : ''}${mainTitle}`;

        if (!!window.ga) {
            window.ga('send', 'pageview', { page: location.pathname, title: document.title });
        }

        if (!!window.dataLayer) {
            const dataLayer = window.dataLayer;
            dataLayer.push({ 
                event: 'page-changed',
                url: location.pathname,
                page_title: document.title
            });
        }

        return () => {
            document.title = mainTitle;
            //window.ga('send', 'pageview', { page: location.pathname, title: document.title });
        };
    }, [title, location]);

    return <></>;
};

export default PageTitle;