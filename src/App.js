import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Navigator from  './components/navigator/Navigator';
import Footer from './components/footer/Footer';
import '../src/styles/css/styles.css';
import { fetchLandingPageContent, 
         fetchMainMenuItems,
         fetchSubMenuItems } from './helpers/ContentConsumer';
         import useOukapi from './helpers/dataFetch';
import HomePage from "./components/home";
import About from "./components/about";
//import HowPage from "./components/how";
//import CommunityPage from "./components/community";

function App() {
  const [homeProps, setHomeProps] = useState({});
  //const [aboutProps, setAboutProps] = useState({});
  //const [headerText, setHeaderText] = useState('');
  //const [bodyText, setBodyText] = useState('');
  //const [imageUrl, setImageUrl] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [subMenuId, setSubMenuId] = useState('');
  //const [anchorLink, setAnchorLink] = useState('');
  //const [anchorLabel, setAnchorLabel] = useState('');
  const [subMenu, setSubMenu] = useState([]);
  const [errors, setErrors] = useState({});  //use to confirm render component or error page
  const [{data, isError}] = useOukapi("https://admin.beta.openreferraluk.org/about-page")

 
const aboutProps = data;
  useEffect(() => {
    // fetch from strapi
    fetchLandingPageContent()
      .then((data) => {
        // set data from strapi to state vars
        setHomeProps((data));
        
        
       // setBodyText(data.projectOverview);
        if (data.sub_menu) {
          setSubMenuId(data.sub_menu.id);
        }
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
        /*if (data.logo) {
          setImageUrl(data.logo.name);
        }*/
       
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
      .then((data) => { 
        console.log("main menu items ", data);
        setMainMenu(data)
      });
  }, []);

  useEffect(() => {
    
    if (subMenuId) {
      
      fetchSubMenuItems(subMenuId)
        .then((data) => { setSubMenu(data.MenuItem)}).catch(err => {
          handleErrors("menu",err.message);
        });
    }
  }, [subMenuId]);

  if (subMenu && subMenu.length > 0) {
    console.log(`submenu set ${subMenu}`, isError );
   
  } else {
    console.log("no submenus set ");
  
  }

  





  


  console.log("fetch hook data", aboutProps)
  
  //console.log("about props set", aboutProps )
  //aboutProps.sideMenu = subMenu;
  //aboutProps.styleName = "main";


  const handleErrors = (target, message) => {
    const errors = {};

    errors[target] = message;
    setErrors(errors);
  }
 console.log("Home page props ", errors, aboutProps);

  return (
  

    Object.keys(homeProps).length > 0 &&  
    
    
    ( <div className="container">
      
    
    <Header />
        <Navigator mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
        <Switch>
            <Route exact path="/" render={() => 
                (
                  <HomePage homePageProps={homeProps} classname="main" />
                )}/>
                 <Route path="/about-page" render={() =>  <About aboutProps={aboutProps} sideMenu={subMenu} styleName="main" /> }/>
      {/*<Route path="/home" render={() => (
        <HomePage headingText={headerText} bodyText={bodyText} classname="main" quote={quote} anchorLabel={anchorLabel} anchorLink={anchorLink}
        hIIHeading="Some heading" listItems={["one","two","threee"]}/>

      )}/>

      <Route path="/how-to" render={() =>  <HowPage headingText={headerText} bodyText={bodyText} styleName="main"/> }/>
      <Route path="/get-started" render={() =>  <CommunityPage headingText={headerText} bodyText={bodyText} styleName="main"/> }/>*/}
      </Switch> 
      <Footer className="footer" />
    
    
    </div>)
    
  );
}

export default App;
