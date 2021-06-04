import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const cleanMarkup = (dirtyUnsafe) => {
    const sanitizedParam = DOMPurify.sanitize(dirtyUnsafe);
    return sanitizedParam;
};

const InjectHtml = ({ paragraphText, itemKey, sectionClassName='format' } ) => 
    <section key={itemKey} className={sectionClassName} dangerouslySetInnerHTML={{ __html: cleanMarkup(paragraphText) }}></section>;

InjectHtml.propTypes = {
    paragraphText: PropTypes.string,
}

export default InjectHtml;