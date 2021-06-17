import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://admin.beta.openreferraluk.org';

const cleanMarkup = (dirtyUnsafe) => {
    const sanitizedParam = DOMPurify.sanitize(dirtyUnsafe);
    return sanitizedParam;
};

const correctImgPath = (html) => html.replace(/src="\/uploads\/(.*)"/mg, `src="${BASE_URL}/uploads/$1"`);

const InjectHtml = ({ paragraphText, itemKey, sectionClassName='format' } ) => 
    <section key={itemKey} className={sectionClassName} dangerouslySetInnerHTML={{ __html: correctImgPath(cleanMarkup(paragraphText)) }}></section>;

InjectHtml.propTypes = {
    paragraphText: PropTypes.string,
}

export default InjectHtml;