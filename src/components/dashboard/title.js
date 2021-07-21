import InjectHtml from '../home/InjectHtml';

const Title = ({ children, help }) =>
    !!help[children]
        ? <span className='with-help'>{children}<span className='help' tabIndex='0'><span className='help-text'><InjectHtml sectionClassName='' itemKey={`help-${children}`} paragraphText={help[children]} /></span></span></span>
        : <span>{children}</span>;

export default Title;