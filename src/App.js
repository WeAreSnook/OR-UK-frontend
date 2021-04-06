import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SideMenu from './components/sidemenu/SideMenu';
import './App.css';
import { config } from './config.js';


function App() {

  const [headerText, setHeaderText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [subMenuId, setSubMenuId] = useState('');
  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);

  useEffect(() => {
	var pageUri = window.location.pathname;
	if (pageUri === '/'){
		pageUri = '/landing-page';
	}
    // fetch from strapi
    fetch(config.STRAPI_BASE_URI + pageUri)
      .then((res) => res.json())
      .then((data) => {
        // set data from strapi to state vars
        setHeaderText(data.title);
        setBodyText(data.projectOverview);
        if (data.sub_menu) {
          setSubMenuId(data.sub_menu.id);
        }
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
        if (data.logo) {
          setImageUrl(data.logo.name);
        }
      });

    fetch(config.STRAPI_BASE_URI + config.MENU_URI_STUB)
      .then((res) => res.json())
      .then((data) => setMainMenu(data));
  }, []);

  useEffect(() => {
    if (subMenuId) {
      fetch(config.STRAPI_BASE_URI + config.SUB_MENU_URI_STUB + subMenuId)
        .then((res) => res.json())
        .then((data) => setSubMenu(data.MenuItem));
    }
  }, [subMenuId]);

  let side;
  let mainPanelCss = 'col-12';

  if (subMenu && subMenu.length > 0) {
    mainPanelCss = 'col-10';
    side = <SideMenu subMenu={subMenu} />;
  }

  return (
    <Router>
      <div className="App">
        <Header mainMenu={mainMenu} topMenuId={topMenuId} />
        <div className="container-fluid">
          <div className="row">
            {side}
            <div className={mainPanelCss}>
              <main>
                <h2>{headerText}</h2>
                <ReactMarkdown>{bodyText}</ReactMarkdown>
                <img className="logo" src={imageUrl} alt="logo" />
              </main>
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
