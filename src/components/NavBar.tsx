import React, { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import supabase from "../config/supabaseClient";
import logo from "../assets/image/logo.png";
import menubar from "../assets/image/menuBarBlack.svg";
import x from "../assets/image/x.svg";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const authCtx = useContext(AuthContext);
  const [signInCheck, setSignInCheck] = useState<boolean>(false);
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (Array.isArray(accounts)) {
          console.log("address: ", accounts[0]);
          const { data, error } = await supabase
            .from("account")
            .select()
            .eq("metaaddress", accounts[0]);

          if (Array.isArray(data) && data.length !== 0) {
            console.log(data[0].nickname, data[0].metaaddress);
            authCtx.onLogin(data[0].nickname, data[0].metaaddress);
            setSignInCheck(true);
          } else {
            alert("가입 정보가 없습니다. 회원가입을 이용해주세요.");
          }

          if (error) {
            console.log(error);
          }
        }
      } else {
        if (isMobile) {
          alert("메타마스크 어플로 접속해주세요! 지갑 로그인이 필요합니다!");
        } else {
          alert("크롬으로 접속해주세요! 메타마스크 지갑이 필요합니다");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mobileMenuClickHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div
      className={isMobile ? styles.mainContainerMobile : styles.mainContainer}
    >
      {isMobile ? (
        <>
          <Link to="/" className={styles.LogoTxtMobile}>
            <img src={logo} alt="logo" className={styles.logoMobile} />
            SPONANCE
          </Link>
          <img
            src={menubar}
            alt="menu"
            className={styles.menubar}
            onClick={mobileMenuClickHandler}
          />

          <div className={`${styles.menuModal} ${showMenu ? styles.open : ""}`}>
            <div className={styles.topContainer}>
              <Link to="/" className={styles.LogoTxtMobile}>
                <img src={logo} alt="logo" className={styles.logoMobile} />
                SPONANCE
              </Link>
              <img
                src={x}
                alt="x"
                className={styles.menubar}
                onClick={mobileMenuClickHandler}
              />
            </div>
            <>
              <div className={styles.subContainerMobile}>
                <Link to="/about" className={styles.linkTxtMobile}>
                  About SPONANCE
                </Link>
                <Link to="/campaign" className={styles.linkTxtMobile}>
                  후원하기
                </Link>
                {!authCtx.isLoggedIn && (
                  <Link
                    to="/"
                    className={styles.linkTxtMobile}
                    onClick={getAccount}
                  >
                    로그인
                  </Link>
                )}
                {!authCtx.isLoggedIn && (
                  <Link to="/signup" className={styles.linkTxtMobile}>
                    회원가입
                  </Link>
                )}
                {authCtx.isLoggedIn && (
                  <Link to="/mypage" className={styles.linkTxtMobile}>
                    마이페이지
                  </Link>
                )}
              </div>
            </>
          </div>
        </>
      ) : (
        <>
          <Link to="/" className={styles.LogoTxt}>
            <img src={logo} alt="logo" className={styles.logo} />
            SPONANCE
          </Link>
          <div className={styles.subContainer}>
            <Link to="/about" className={styles.linkTxt}>
              About SPONANCE
            </Link>
            <Link to="/campaign" className={styles.linkTxt}>
              후원하기
            </Link>
            {/* <Link to="/faq" className={styles.linkTxt}>
          FAQ
        </Link> */}

            {!authCtx.isLoggedIn && (
              <Link to="/" className={styles.linkTxt} onClick={getAccount}>
                로그인
              </Link>
            )}
            {!authCtx.isLoggedIn && (
              <Link to="/signup" className={styles.linkTxt}>
                회원가입
              </Link>
            )}
            {authCtx.isLoggedIn && (
              <div>
                <Link to="/mypage" className={styles.linkTxt}>
                  마이페이지
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
