import React from 'react';
import ReactDOMServer from 'react-dom/server'
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const InjectHtml = ({ paragraphText, itemKey, paragraphHeader } ) => {
  

    const cleanMarkup = (dirtyUnsafe) => {
        const headerString = ReactDOMServer.renderToStaticMarkup(paragraphHeader);
        const sanitizedParam = DOMPurify.sanitize(headerString + dirtyUnsafe);
        return sanitizedParam;
    }
    return(
        <section 
            key={itemKey} 
            className="format" 
            dangerouslySetInnerHTML={{ __html: cleanMarkup(paragraphText) }}>
        </section>
    )
}

InjectHtml.propTypes = {
    paragraphText: PropTypes.string,
}
export default InjectHtml;