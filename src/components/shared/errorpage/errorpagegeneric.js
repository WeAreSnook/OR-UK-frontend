import React from 'react';


const GenericErrorPage = ({contentRef}) => {
    return <main id='content' className='main-container' ref={contentRef}>
            <p>Something went wrong</p>
            </main>;
}
export default GenericErrorPage