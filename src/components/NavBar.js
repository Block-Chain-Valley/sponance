import React from "react";
import styles from "./NavBar.module.css";

import searchIcon from "../assets/image/search.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <Link to="/" className={styles.LogoTxt}>
        SPONANCE
      </Link>
      <div className={styles.subContainer}>
        <Link to="/about" className={styles.linkTxt}>
          ABOUT
        </Link>
        <Link to="/campaign" className={styles.linkTxt}>
          CAMPAIGN
        </Link>
        <Link to="/faq" className={styles.linkTxt}>
          FAQ
        </Link>
        <img className={styles.searchIcon} src={searchIcon} alt="search icon" />
        <Link to="/signin" className={styles.linkTxt}>
          SIGN IN
        </Link>
        <Link to="/signup" className={styles.linkTxt}>
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
