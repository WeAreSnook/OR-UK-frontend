
const SUB_MENU_URI = '/sub-menus/';

const BASE_URL  = process.env.REACT_APP_BASE_URL;
const LANDING_PAGE_URI = process.env.REACT_APP_HOME_PAGE_URI;
const MENU_URI = process.env.REACT_APP_MENU_URI;


export const fetchLandingPageContent = () => {
  //consider using nlogger
  
  return fetch(BASE_URL + LANDING_PAGE_URI)
    .then(async res => { 
      if (res.status === 200) {
        return await res.json();
      } else {
        //add logger here
        console.log("response status ", res.status, BASE_URL + LANDING_PAGE_URI)
      }
    }).catch(err => { console.log(err); });
}

export const fetchMainMenuItems = () => {
  return fetch(BASE_URL + MENU_URI)
    .then(async res => {

      if (res.status === 200) {
        
        return await res.json();
      } else {
         //add logger here
        console.log("response from fetch menu ", res.status);
      }
      
    } )
}

export const fetchSubMenuItems = subMenuId => {
  return fetch(BASE_URL + SUB_MENU_URI + subMenuId)
    .then(res => res.json()).catch(err => { throw new Error("Network time out")});
}