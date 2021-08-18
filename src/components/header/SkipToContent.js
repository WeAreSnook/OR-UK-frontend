import { Link } from "react-router-dom";
import { useRef } from 'react';

const SkipToContent = ({ contentRef }) => {
  const skipLink = useRef(null);

  return (
      <Link ref={skipLink} to="#content" onClick={() => { if (skipLink.current && contentRef.current) { skipLink.current.blur(); contentRef.current.focus()}}} className="skiplink">Skip to main content</Link>
  )
};

export default SkipToContent;