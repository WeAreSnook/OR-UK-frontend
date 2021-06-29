import { covertHeadingToIdentifier, HtmlSection } from '../htmlsection';
import GenericContent from './GenericContent';
import InjectHtml from '../home/InjectHtml';

const KeepInformedSection = ({ section, index }) => <HtmlSection key={section.id} index={index} section={section}>
    <form className='form-section'>
        <h3>Sign up to our news letter</h3>
        <label>Email address</label>
        <div className='input-with-button'>
            <input type='text' name='email-address' />
            <button type='submit' className='button button-primary'>Subscribe</button>
        </div>
    </form>
</HtmlSection>;

const RegisterYourOrganisation = ({ section, index }) => <form className='form-section'>
    <h3>{section.sectionHeading}</h3>
    <InjectHtml itemKey={`${index}body`} paragraphText={section.sectionBody} />

    <div className='form-item'>
        <label>Organisation name</label>
        <input type='text' name='email-address' />
    </div>

    <div className='form-item'>
        <label>Organisation type</label>
        <input type='text' name='email-address' />
    </div>

    <div className='form-item'>
        <label>Organisation adoptation stage</label>        
    </div>
</form>;

const RegisterSections = ({ sections }) => sections.map((section, index) => {
    const identifier = covertHeadingToIdentifier(section.sectionHeading);

    if (identifier === `keep-informed`)
        return <KeepInformedSection key={section.id} index={index} section={section} />;

    if (identifier === `register-your-organisation`)
        return <RegisterYourOrganisation key={section.id} index={index} section={section} />;

    return <HtmlSection key={section.id} index={index} section={section} />;
});

const RegisterContent = (props) => <GenericContent {...props} showDescription={false} Sections={RegisterSections} />;

export default RegisterContent;