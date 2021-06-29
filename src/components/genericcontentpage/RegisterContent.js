import { covertHeadingToIdentifier, HtmlSection } from '../htmlsection';
import GenericContent from './GenericContent';
import InjectHtml from '../home/InjectHtml';

const KeepInformedSection = ({ section, index }) => <HtmlSection key={section.id} index={index} section={section}>
    <form className="form-section">
        <h3>Sign up to our news letter</h3>
        <label>Email address</label>
        <div className="input-with-button">
            <input type="text" id="email-address" name="email-address" />
            <button type="submit" className="button button-primary">Subscribe</button>
        </div>
    </form>
</HtmlSection>;

const RegisterYourOrganisation = ({ section, index }) => <form className="form-section">
    <h3>{section.sectionHeading}</h3>
    <InjectHtml itemKey={`${index}body`} paragraphText={section.sectionBody} />

    <div className="form-item">
        <label htmlFor="organisation-name">Organisation name</label>
        <input type="text" id="organisation-name" name="organisation-name" />
    </div>

    <div className="form-item">
        <label htmlFor="organisation-type">Organisation type</label>
        <input type="text" id="organisation-type" name="organisation-type" list="organisation-types" />
        <datalist id="organisation-types">
            <option value="Commissioning a directory of services" />
            <option value="Supplying directory software and API" />
            <option value="Consuming an Open Referral compliant API" />
            <option value="Maintaining service data" />
        </datalist>
    </div>

    <div className="form-item">
        <label>Organisation adoptation stage</label>
        <div className="check-list">
            <div className="check-item">
                <input type="radio" id="adoptation-considering" name="adoptation" value="Considering" /> <label htmlFor="adoptation-considering">Considering</label>
            </div>
            <div className="check-item">
                <input type="radio" id="adoptation-adopting" name="adoptation" value="Adopting" /> <label htmlFor="adoptation-adopting">Adopting</label>
            </div>
            <div className="check-item">
                <input type="radio" id="adoptation-adopted" name="adoptation" value="Adopted" /> <label htmlFor="adoptation-adopted">Adopted</label>
            </div>
        </div>
    </div>

    <div className="form-item">
        <label htmlFor="web-link">
            Web link URL (optional)
            <small>Provide a link for people to read about your adoptation or organisation.</small>
        </label>
        <input type="text" id="web-link" name="web-link" />
    </div>

    <div className="form-item">
        <label htmlFor="private-email-address">
            Private email address
            <small>So that we can follow-up with you to verify your organisation. Will not be shared.</small>
        </label>
        <input type="text" id="private-email-address" name="private-email-address" />
    </div>

    <div className="form-item">
        <label htmlFor="public-email-address">
            Public email address (optional)
            <small>Will be sared alongside your organisation on our Who's using page.</small>
        </label>
        <input type="text" id="public-email-address" name="public-email-address" />
    </div>

    <div className="form-item">
        <br />
        <button type="submit" className="button button-primary">Register organisation</button>
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