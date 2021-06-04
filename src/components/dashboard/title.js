import InjectHtml from '../home/InjectHtml';

const Title = ({ children, help }) =>
    !!help[children]
        ? <div className='with-help'>{children}<div className='help' tabIndex='0'><div className='help-text'><InjectHtml sectionClassName='' itemKey={`help-${children}`} paragraphText={help[children]} /></div></div></div>
        : <span>{children}</span>;

export default Title;