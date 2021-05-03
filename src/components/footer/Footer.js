
import Banner from '../banner';
import Title from './tiles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LinkExternal from './LinkExternal';
import LinkListItem from "../links/LinkListItem";
import FooterColumn from './column';
//review refactor
//todo - terms and conditions policy to go into grid

const Footer = ({ footerProps, styleName }) => {

  const [about, setAboutLinks] = useState({});
  const [howItWorks, setHowItWorksLinks] = useState({});
  const [community, setCommunityLinks] = useState({});
  const [involved, setInvolvedLinks] = useState({});
  const [contactUs, setContactLink] = useState({});


  useEffect(() => {

    if (footerProps) {

      if (footerProps.aboutLinks) setAboutLinks(footerProps.aboutLinks);
      if (footerProps.howItWorksLinks) setHowItWorksLinks(footerProps.howItWorksLinks);
      if (footerProps.communityLinks) setCommunityLinks(footerProps.communityLinks);
      if (footerProps.getInvolved) setInvolvedLinks(footerProps.getInvolved);
      if (footerProps.contact) setContactLink(footerProps.contact);

    }
  }, [footerProps]);

  // there is an id property if needed when refactored

  return (
    Object.keys(about).length > 0 &&
    (<footer className={styleName} role="contentinfo" aria-label="footer">

      <div className="page-container">
        <div className="footer__top">
          <Banner />
        </div>


        <div className="footerwrapper">
          <div className="footer__column">
            <Title title="Governance board" />
            {/*<CreateImgTag/> build grid if we don't want a fluid flow*/}
            <div>logos grid</div>
          </div>

          <div className="footer__column">
            <Title title={involved.title} />
            <LinkExternal link={involved.link} rel="noreferrer" target="_blank" />
          </div>

          <div className="footer__column">
            <Title title={contactUs.title} />
            <ul key={contactUs.id}><LinkListItem link={contactUs.link} /></ul>
          </div>

        </div>
      </div>


      <div className="footer_bottom">
        <div className="page-container">

          <div className="footerwrapper">

            <div className="footer__column">
                <Title title={about.title} />
                {about.links && about.links.map(link => {
                  return <ul key={link.id}><LinkListItem link={link} /></ul>
                })}
              </div>


              <div className="footer__column">
                <Title title={howItWorks.title} />
                <FooterColumn links={howItWorks.links} />
              </div>


              <div className="footer__column">
                <Title title={community.title} />
                {community.links.map(link => {
                  //can probably check link domain here or see if anything in backend
                  if (link.textToDisplay && link.textToDisplay === "Community Forum") link.external = true;
                  return <ul key={link.id}><LinkListItem link={link} /></ul>
                })}
              </div>
            
          </div>

          <div className="footnotegrid">
            <p>
              <small>Copyright &copy; 2019–2021 Open Referral UK</small>
            </p>
              <ul>
                <li key="1"><Link to="/accessibility-statement"><small>Accessibility statement</small></Link></li>
                <li key="2"><Link to="/terms-conditions"><small>Terms &amp; Conditions</small></Link></li>
                <li key="3"><Link to="/privacy-policy"><small>Privacy Policy</small></Link></li>
              </ul>
          </div>

        </div>
      </div>

    </footer>)
  );

}

export default Footer;
