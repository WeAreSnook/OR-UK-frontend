import React from 'react';


const GenericErrorPage = ({contentRef}) => {
    return <main id='content' className='main-container' ref={contentRef}>
            <p>Something does not seem right.</p>
            </main>;
}
export default GenericErrorPage