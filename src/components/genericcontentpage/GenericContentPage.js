import { useState, useEffect } from 'react';
import HtmlSection from '../htmlsection';
import SideMenu from '../sidemenu';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GenericContentPage = ({ cmsLocation, articleType, footerProps }) => {
  const [article, setArticle] = useState(null);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [sectionHeadings, setSectionHeadings] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    fetch(new URL(cmsLocation, BASE_URL).href)
    .then(async res => { 
      if (res.status === 200) {
        //console.log("response from fetch home ", res.status);
        setIsFetching(false);
        setData(await res.json());
      } else {
        setIsError(true);
        setIsFetching(false);
        //console.log("response status ", res.status)
      }
    }).catch(err => { setIsError(true); 
                      setIsFetching(false); });
  }, [cmsLocation]);

  useEffect(() => {
    // check we have data, no error, and if data is array, array has elements
    if (data && !isError && (!Array.isArray(data) || data.length)) {
      const pageData = Array.isArray(data) ? data[0] : data;
      setArticle(pageData[articleType])
    };

    if (article) {
      setSectionHeadings(article.sections.map(section => section.sectionHeading));
    }

  }, [article, data, isError, articleType]);

  if (isError || !article) return null;

  let readNextLink = <></>
  if (article.ReadNextLink) {
    readNextLink = (<><hr />
      <Link to={article.ReadNextLink.url}>
        {article.ReadNextLink.TextToDisplay}
      </Link></>)
  }
console.log('content page', article);
  return (
    <>
    <main id="content" className="main-container">
      { !isFetching ? !isError && article ? 
      (<div className="page-container flex-container">
        <SideMenu subMenu={sectionHeadings} />
        <article className="flex-right">
          <h1>{article.title}</h1>
          <HtmlSection sections={article.sections} />
          {readNextLink}
        </article>
      </div>) : null 
      : <p className="page-container flex-container">Loading......</p> }
    </main>
    {!isFetching && !isError && article && footerProps && <Footer footerProps={footerProps} styleName="footer" />}
    </>
  )
}

export default GenericContentPage;