import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/errorpage/'
import GenericErrorPage from './components/shared/errorpage/errorpagegeneric';
import '../src/styles/sass/styles.scss';
import useOukapi from './helpers/dataFetch';
import HomePage from "./components/home";
import GenericLandingPage from "./components/genericlandingpage/GenericLandingPage";
import WhoIsUsing from "./components/whoisusing";
import GenericContentPage from './components/genericcontentpage/GenericContentPage';
import CaseStudiesLandingPage from './components/casestudies/LandingPage';
import SkipToContent from './components/header/SkipToContent';

function App() {
  const location = useLocation();

  const [homeProps, setHomeProps] = useState({});
  const [topMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [footerProps, setFooterProps] = useState({});

  const [errors, setErrors] = useState(false);  //use to confirm render component or error page

  const BASE_URL  = 'https://admin.beta.openreferraluk.org';
  const ABOUT_PAGE = process.env.REACT_APP_ABOUT_PAGE_URI;
  const CONTACT_PAGE = process.env.REACT_APP_CONTACT_PAGE;
  const REACT_APP_FOOTER = process.env.REACT_APP_FOOTER;
  const REACT_APP_HOME_PAGE_URI = process.env.REACT_APP_HOME_PAGE_URI;
  const MENU_URI = '/top-menus';

  let [{data, isFetching, isError}] = useOukapi([{key: "menuContent", url: `${BASE_URL}${MENU_URI}`},{key:"footerContent", url: `${BASE_URL}${REACT_APP_FOOTER}`},{key: "homeContent", url: `${BASE_URL}${REACT_APP_HOME_PAGE_URI}`}]);
 
  useEffect(() => {
    let current;
    
    if (isError) {
      //enhance with retries
      setErrors(true);
      return;
    }

    if (!isFetching && !data.length) {
    
      setErrors(true);
      return
    };

      if(!isFetching && data.length>0) {
       current = data.filter(indexValue => {
          return indexValue.url.key === "homeContent";
        });
        setHomeProps(current[0].data);
      
        current = [];
        current = data.filter(indexValue => {
          return indexValue.url.key === "menuContent";
        });  
        //check if value -write failing test
        setMainMenu(current[0].data)

        current = [];
        current = data.filter(indexValue => {
          return indexValue.url.key === "footerContent";
        }); 
        setFooterProps(current[0].data);
      } 
    
  }, [setHomeProps, setMainMenu, data, isError, isFetching]);    

  useEffect(() => {
    if (location.hash === '') {
      return;
    }
    setTimeout(() => {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 1000);
  }, [location]);

  if (isError) { setErrors(true); }


  if (errors) {
    throw new Error('Data load failure');
  }

  return (
   
    !isFetching  && !isError  && Object.keys(homeProps).length > 0 ?
    
    (<>
      
    <SkipToContent/>
    <Header mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
        
        <div className="page-wrapper">
        <Switch>
            <Route exact path="/" render={() => ( <HomePage homePageProps={homeProps} classname="main" /> )}/>
            <Route path="/about-standard" render={() => <GenericContentPage cmsLocation={ABOUT_PAGE} articleType="about" />}/>
            <Route path="/how-it-works/:slugField" render={({ match }) => <GenericContentPage cmsLocation={`/pages?slugfield=${match.params.slugField}`} articleType="page" />}/>
            <Route path="/how-it-works" render={() =>  <GenericLandingPage cmsLocation={process.env.REACT_APP_HOW_WORKS} articleType="HowItWorks"/> }/>
            <Route path="/community/case-studies/:slugField" render={({ match }) => <GenericContentPage cmsLocation={`/case-studies?slugfield=${match.params.slugField}`} articleType="CaseStudy" />} />
            <Route path="/community/case-studies" render={ () => <CaseStudiesLandingPage styleName="main"/> } />
            <Route path="/community" render={() =>  <GenericLandingPage cmsLocation={process.env.REACT_APP_COMMUNITY_PAGE} articleType="communityPage"/> }/>
            <Route path="/contact-us" render={() => <GenericContentPage cmsLocation={CONTACT_PAGE} articleType="contactUs" />} />
            <Route path="/standard-community" render={() =>  <WhoIsUsing styleName="main"/> }/>
            <Route path="/accessibility-statement" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/privacy-policy" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/terms-conditions" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/show-error"  component={GenericErrorPage} />
            <Route path="/open-referral-uk-video-transcript" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/404"  component={NotFound} />
            <Redirect to="/404" />
        </Switch> 
        </div>
      <Footer footerProps={footerProps} styleName="footer" />
    
    
    </>) : <div>Loading...</div>
    
  );
}

export default App;
