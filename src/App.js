import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/errorpage/'
import GenericErrorPage from './components/shared/errorpage/errorpagegeneric';
import '../src/styles/sass/styles.scss';
import {
    fetchLandingPageContent,
    fetchMainMenuItems
} from './helpers/ContentConsumer';
import useOukapi from './helpers/dataFetch';
import HomePage from "./components/home";
import GenericLandingPage from "./components/genericlandingpage/GenericLandingPage";
import WhoIsUsing from "./components/whoisusing";
import GenericContentPage from './components/genericcontentpage/GenericContentPage';
import CaseStudyPage from './components/genericcontentpage/CaseStudyPage';
import LandingPage from './components/casestudies/LandingPage';
import SkipToContent from './components/header/SkipToContent';
import Dashboard from './components/dashboard/dashboard';
import mockData from './components/dashboard/mockData';
import Preview from './components/preview/preview';
import CookieBanner from './components/shared/cookiebanner/';
import { useCookies } from 'react-cookie';

const cookieExists = (name) => {
    var re = new RegExp(name + '=');
    var value = re.exec(document.cookie);
    return (value !== null);
};

const initGoogleAnalytics = () => {
    console.log('google analytics enabled');
    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-T869DN6');
};

const initGoogleAnalyticsIfCookie = () => {
    if (!cookieExists('openreferralukorg'))
        return;
    initGoogleAnalytics();
};

//refactor
//pull data as needed perhaps on first call of page?
function App() {
    useEffect(() => {
        initGoogleAnalyticsIfCookie();
    }, []);

    const location = useLocation();

    const [homeProps, setHomeProps] = useState({});
    const [topMenuId, setTopMenuId] = useState('');
    const [mainMenu, setMainMenu] = useState([]);
    const [errors] = useState({});  //use to confirm render component or error page

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const ABOUT_PAGE = process.env.REACT_APP_ABOUT_PAGE_URI;
    const CONTACT_PAGE = process.env.REACT_APP_CONTACT_PAGE;
    const REACT_APP_FOOTER = process.env.REACT_APP_FOOTER;
  
    const [cookies, setCookie] = useCookies(['']);
    const [showBanner, setShowBanner] = useState(true);
  
    const handleAccept = () => {
        setCookie("openreferralukorg","", { path: '/'} );
        setShowBanner(false);
        initGoogleAnalytics();
    }
  
    const handleReject = () => {
      setCookie("hidecookienotify","", { path: '/'} );
      setShowBanner(false);
  }
  
    useEffect(() => {
        if (cookies && (cookies.hasOwnProperty("openreferralukorg") || cookies.hasOwnProperty("hidecookienotify"))) {
            setShowBanner(false);
        }
  
    },[cookies, setShowBanner]);

    console.log(errors);  //take care of on refactor

    let [{ data, isFetching, isError }] = useOukapi(`${BASE_URL}${REACT_APP_FOOTER}`)
    const footerProps = data;

    const routes = [
        { exact: true, path: "/", render: () => (<HomePage homePageProps={homeProps} classname="main" />) },
        { path: "/about-standard", render: () => <GenericContentPage cmsLocation={ABOUT_PAGE} articleType="about" /> },
        { path: "/how-it-works/:slugField", render: ({ match }) => <GenericContentPage cmsLocation={`/pages?slugfield=${match.params.slugField}`} articleType="page" parent={{ path: `/how-it-works`, title: `How it works` }} /> },
        { path: "/how-it-works", render: () => <GenericLandingPage cmsLocation={process.env.REACT_APP_HOW_WORKS} articleType="HowItWorks" /> },
        { path: "/community/case-studies/:slugField", render: ({ match }) => <CaseStudyPage slugField={match.params.slugField} /> },
        { path: "/community/case-studies", render: () => <LandingPage styleName="main" parent={{ path: `/community`, title: `Community` }} /> },
        { path: "/community", render: () => <GenericLandingPage cmsLocation={process.env.REACT_APP_COMMUNITY_PAGE} articleType="communityPage" /> },
        { path: "/contact-us", render: () => <GenericContentPage cmsLocation={CONTACT_PAGE} articleType="contactUs" /> },
        { path: "/standard-community", render: () => <WhoIsUsing styleName="main" parent={{ path: `/community`, title: `Community` }} /> },
        { path: "/accessibility-statement", render: ({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" /> },
        { path: "/privacy-policy", render: ({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" /> },
        { path: "/terms-conditions", render: ({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" /> },
        { path: "/show-error", component: GenericErrorPage },
        { path: "/open-referral-uk-video-transcript", render: ({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" /> },
        { path: "/dashboard", render: () => <Dashboard /> },
        { path: "/devdashboard", render: () => <Dashboard overrideData={mockData} /> },
        { path: "/preview", render: () => <Preview /> },
        { path: "/404", component: NotFound }
    ];

    useEffect(() => {
        // fetch from strapi
        fetchLandingPageContent()
            .then((data) => {
                // set data from strapi to state vars
                console.log("homeprops", data)
                setHomeProps((data));
                // setBodyText(data.projectOverview);
                if (data.top_menu) {
                    setTopMenuId(data.top_menu.id);
                }

            }).catch(err => console.log("do something with error as required"));

        fetchMainMenuItems()
            .then((data) => {
                setMainMenu(data)
            });
    }, []);

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

    //now can use iserror instead of object keys
    return (
        !isFetching && !isError && Object.keys(homeProps).length > 0 &&

        (<>
            <SkipToContent />
            <CookieBanner isVisible={showBanner} onClick={{accept: handleAccept, reject: handleReject}}/>
            <Header mainMenu={mainMenu} topMenuId={topMenuId.toString()} />

            <div className="page-wrapper">
                <Switch>
                    {routes.map(r => <Route key={r.path} exact={r.exact} path={r.path} component={r.component} render={r.render} />)}
                    <Redirect to="/404" />
                </Switch>
            </div>
            <Footer footerProps={footerProps} styleName="footer" />
        </>)
    );
}

export default App;
