import React from 'react';
import BackButton from '../genericcontentpage/BackButton';

const NotFound = ({ parent }) => <main id="content" className="main-container">
    <div className="page-container flex-container">
        <article className="flex-right">
            <BackButton parent={parent} />
			<h1>Page not found</h1>
            <p>
                If you typed the web address, check it is correct.
            </p>
            <p>
                If you pasted the web address, check you copied the entire address.
            </p>
            <p>
                Or, you can navigate to the <a href="/">homepage</a> and find the page in the website's menu.
            </p>
            <p>
                If you're still not able to find what you need, <a href="mailto:hello@openreferraluk.org">contact us</a> for help.
            </p>
        </article>
    </div>
</main>;

export default NotFound;