import React, { useContext, useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const NavBar = () => {
  const [checkSignIn, setcheckSignIn] = useState<boolean>(false);
  // const [account, setAccount] = useState<string | unknown>("");
  const authCtx = useContext(AuthContext);

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // setAccount(accounts);
        if (Array.isArray(accounts)) {
          console.log("address: ", accounts[0]);
          authCtx.onLogin(accounts);
          setcheckSignIn(true);
        }
      } else {
        alert("크롬으로 접속해주세요! 메타마스크 지갑이 필요합니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        {/* <img className={styles.searchIcon} src={searchIcon} alt="search icon" /> */}
        {!checkSignIn && (
          <div className={styles.linkTxt} onClick={getAccount}>
            SIGN IN
          </div>
        )}
        {!checkSignIn && (
          <Link to="/signup" className={styles.linkTxt}>
            SIGN UP
          </Link>
        )}
        {checkSignIn && <div className={styles.linkTxt}>MY PAGE</div>}
      </div>
    </div>
  );
};

export default NavBar;
