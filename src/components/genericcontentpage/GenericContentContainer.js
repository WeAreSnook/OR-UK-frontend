import { useState, useEffect } from 'react';
import NotFound from '../errorpage';
import GenericContent from './GenericContent';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GenericContentContainer = ({ cmsLocation, articleType, parent = null, contentRef, articleClassName = null, ContentComponent = GenericContent, NotFoundComponent = NotFound }) => {
    const [article, setArticle] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(null);
    const [description, setDescription] = useState(null);
    const [slugfield, setSlugfield] = useState(null);

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
                setDescription(pageData.description);
                setSlugfield(pageData.slugfield);
            }
            else {
                setIsNotFound(true);
            }
        };
    }, [article, data, isError, articleType]);

    if (isError || isNotFound)
        return !!NotFoundComponent ? <NotFoundComponent parent={parent} /> : null;

    if (!article)
        return null;

    const props = {
        slugfield,
        description,
        article,
        parent,
        contentRef,
        articleClassName
    };

    return <ContentComponent {...props} />;
};

export default GenericContentContainer;