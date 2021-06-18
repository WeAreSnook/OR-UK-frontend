import React from 'react';
import BackButton from '../genericcontentpage/BackButton';

const NotFound = ({ parent }) => <main id="content" className="main-container">
    <div className="page-container flex-container">
        <article className="flex-right">
            <BackButton parent={parent} />
			<h1>Page not found</h1>
            
        </article>
    </div>
</main>;

export default NotFound;