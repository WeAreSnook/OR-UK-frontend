import { useEffect } from 'react';

const mainTitle = `Open Referral UK`;

const PageTitle = ({ title }) => {
    useEffect(() => {
        document.title = `${mainTitle}${!!title ? ` - ${title}` : ''}`;
        
        return () => {
            document.title = mainTitle;
        };
    }, [title]);

    return <></>;
};

export default PageTitle;