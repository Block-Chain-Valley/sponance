import React from "react";
import styles from "./Footer.module.css";

import logo from "../assets/image/logoWithTextWhite2.png";
import socialLogo1 from "../assets/image/Social1.png";
import socialLogo2 from "../assets/image/Social2.png";
import socialLogo3 from "../assets/image/Social3.png";
import socialLogo4 from "../assets/image/Social4.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className={isMobile ? styles.mainContainerMobile : styles.mainContainer}
    >
      {!isMobile && <img src={logo} className={styles.logo} alt="logo" />}
      <div
        className={isMobile ? styles.linkContainerMobile : styles.linkContainer}
      >
        {isMobile && (
          <img src={logo} className={styles.logoMobile} alt="logo" />
        )}
        <Link className={styles.linkTxt} to="/about">
          About
        </Link>
        <Link className={styles.linkTxt} to="/pricing">
          Pricing
        </Link>
        <Link className={styles.linkTxt} to="/help">
          Help
        </Link>
        {/* <Link className={styles.linkTxt} to="/faq">
          FAQ
        </Link> */}
        <Link className={styles.linkTxt} to="/privacypolicy">
          Privacy Policy
        </Link>
      </div>
      <div className={styles.line} />
      <div className={styles.subContainer}>
        <div className={isMobile ? styles.copyRightMobile : styles.copyRight}>
          © 2023 SPONANCE. All rights reserved
        </div>
        <div className={styles.socialLink}>
          <img className={styles.socailLogo} src={socialLogo1} alt="logo" />
          <img className={styles.socailLogo} src={socialLogo2} alt="logo" />
          <img className={styles.socailLogo} src={socialLogo3} alt="logo" />
          <img className={styles.socailLogo} src={socialLogo4} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
