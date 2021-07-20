import HtmlSections from '../htmlsection';

function ContentPage(props, {styleName}) {

    const { title, introParagraph } = props;
    const myStruct = [{sectionHeading: title, sectionBody: introParagraph}];
    
   //extracted from how
    
    return (
      
        <HtmlSections sections={myStruct} /> 
           
    );
}
    export default ContentPage;