import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import LinkExternal from "../footer/LinkExternal";

const Navigator = ({
  mainMenu,
  menuButton,
  onClick,
  forumLink,
  developersLink,
}) => {
  const isLongestMatch = (mainMenu, index) => {
    if (window.location.href.indexOf(mainMenu[index].link) === -1) {
      return false;
    }
    let lastMatch = mainMenu[index].link.length;
    for (let i = 0; i < mainMenu.length; i++) {
      if (
        i !== index &&
        window.location.href.indexOf(mainMenu[i].link) > -1 &&
        lastMatch < mainMenu[i].link.length
      ) {
        return false;
      }
    }
    return true;
  };

  const menuItems = mainMenu.map(function (name, index) {
    let cssClass = "nav-link";

    // apply active class if we are on the current
    if (mainMenu[index] != null && isLongestMatch(mainMenu, index)) {
      cssClass += " active";
    }

    return (
      <li className="nav-item" key={mainMenu[index].link}>
        <Link className={cssClass} to={mainMenu[index].link}>
          {mainMenu[index].label}
        </Link>
      </li>
    );
  });

  return (
    <nav
      onClick={onClick}
      className={
        menuButton ? "global-nav-x--open global-nav-x" : "global-nav-x"
      }
    >
      <LinkExternal
        link={forumLink}
        rel="noreferrer"
        styleName="forum-link button button-secondary button-header hide-md"
      />
      <LinkExternal
        link={developersLink}
        rel="noreferrer"
        styleName="button button-secondary button-header hide-md"
      />
      <ul>{menuItems}</ul>
    </nav>
  );
};
Navigator.propTypes = {
  mainMenu: PropTypes.array.isRequired,
  topMenuId: PropTypes.string.isRequired,
  menuButton: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Navigator;
