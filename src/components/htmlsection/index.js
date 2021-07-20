import InjectHtml from '../home/InjectHtml';

const HtmlSection = ({ sections }) => {

    return (
        sections.map((item, index) => {

            let header = null;
            if (item.sectionHeading) {
                header = (
                    <h2 id={`section-${index + 1}-heading`}>
                        {item.sectionHeading}
                    </h2>
                )
            }
            return (
                <InjectHtml key={ item.id } 
                            itemKey={`${index}body`} 
                            paragraphText={item.sectionBody} 
                            paragraphHeader={ header } />
            )
        })
    )
}
export default HtmlSection;

