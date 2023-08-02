import classes from "./Footer.module.scss";
import coffeWhiteLogo from "./../images/logo-white.png";
import facbookLogo from "./../images/social-media-links/Facebook.svg";
import twitterLogo from "./../images/social-media-links/twitter.svg";
import instagramLogo from "./../images/social-media-links/instagram.svg";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <img
        alt="Coffeeroasters White logo"
        src={coffeWhiteLogo}
        className={classes["logo-white"]}
      ></img>
      <ul className={classes["navigation__list"]}>
        <li className={classes["navigation__item"]}>
          <NavLink to="/home" className={classes["navigation__link"]}>
            Buy Now
          </NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <a
            href="mailto:contact@swapnilmane.com"
            to="create-plan"
            className={classes["navigation__link"]}
          >
            Contact
          </a>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink to="/privacy" className={classes["navigation__link"]}>
            Privacy
          </NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink to="/terms" className={classes["navigation__link"]}>
            Terms of Service
          </NavLink>
        </li>
      </ul>
      <ul className={classes["navigation__list--social"]}>
        <li className={classes["navigation__item"]}>
          <a
            href="https://twitter.com/GetOData"
            className={classes["navigation__link"]}
          >
            <img
              alt="Twitter Logo"
              src={twitterLogo}
              className={classes.socialLogo}
            ></img>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
