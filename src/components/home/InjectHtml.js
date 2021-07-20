import React from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://admin.beta.openreferraluk.org";

const cleanMarkup = (dirtyUnsafe) => {
  const sanitizedParam = DOMPurify.sanitize(dirtyUnsafe);
  return sanitizedParam;
};

const correctImgPath = (html) =>
  html.replace(/src="\/uploads\/(.*)"/gm, `src="${BASE_URL}/uploads/$1"`);

const InjectHtml = ({
  paragraphText,
  itemKey,
  paragraphHeader,
  sectionClassName = "format",
}) => {
  const headerString = ReactDOMServer.renderToStaticMarkup(paragraphHeader);
  return (
    <section
      key={itemKey}
      className={sectionClassName}
      dangerouslySetInnerHTML={{
        __html: correctImgPath(cleanMarkup(headerString + paragraphText)),
      }}
    ></section>
  );
};

InjectHtml.propTypes = {
  paragraphText: PropTypes.string,
};

export default InjectHtml;
