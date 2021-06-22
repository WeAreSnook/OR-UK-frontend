import GenericContentContainer from './GenericContentContainer';
import GenericContent from './GenericContent';

const GenericContentPage = (props) => <GenericContentContainer {...props} ContentComponent={GenericContent} />;

export default GenericContentPage;

// import { useState, useEffect } from 'react';
// import NotFound from '../errorpage';
// import GenericContent from './GenericContent';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const GenericContentPage = ({ cmsLocation, articleType, parent, articleClassName }) => {
//     const [article, setArticle] = useState(null);
//     const [isNotFound, setIsNotFound] = useState(false);
//     const [data, setData] = useState(null);
//     const [isError, setIsError] = useState(null);

//     useEffect(() => {
//         fetch(new URL(cmsLocation, BASE_URL).href)
//             .then(res => res.json())
//             .then(jsonRes => setData(jsonRes))
//             .catch(err => setIsError(err))
//     }, [cmsLocation]);

//     useEffect(() => {
//         // check we have data, no error, and if data is array, array has elements

//         if (data && !isError) {
//             if ((!Array.isArray(data) || data.length)) {
//                 const pageData = Array.isArray(data) ? data[0] : data;
//                 setArticle(pageData[articleType]);
//                 setIsNotFound(false);
//             }
//             else {
//                 setIsNotFound(true);
//             }
//         };

//     }, [article, data, isError, articleType]);

//     if (isError || isNotFound)
//         return <NotFound parent={parent} />;

//     if (!article)
//         return null;

//     return <GenericContent article={article} parent={parent} articleClassName={articleClassName} />;
// };

// export default GenericContentPage;