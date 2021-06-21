import { Fragment } from 'react';
import InjectHtml from '../home/InjectHtml';

const covertHeadingToCssClassName = heading => {
    if (!!heading || typeof heading !== 'string')
        return null;    
    return heading.toLowerCase().replace(/\s/g, '-');
};

const HtmlSection = ({ sections }) => {

    return sections.map((item, index) => {
        const header = item.sectionHeading
            ? <h2 id={`section-${index + 1}-heading`}><InjectHtml itemKey={`${index}head`} paragraphText={item.sectionHeading} /></h2>
            : null;

        const sectionClassName = covertHeadingToCssClassName(item.sectionHeading);

        return <Fragment key={item.id}>
            {header}
            <InjectHtml itemKey={`${index}body`} sectionClassName={sectionClassName} paragraphText={item.sectionBody} />
        </Fragment>
    });
}
export default HtmlSection;

