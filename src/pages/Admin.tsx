import React, { useState } from "react";
import styles from "./Admin.module.css";

import logo from "../assets/image/logoWithTextWhite2.png";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true); // default false

  return (
    <div className={isAdmin ? styles.mainContainer2 : styles.mainContainer}>
      {!isAdmin && (
        <div className={styles.loginContainer}>
          <div className={styles.subLoginContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.adminTxt}>Admin</div>
          </div>
          <button className={styles.loginBtn}>로그인</button>
        </div>
      )}
      {isAdmin && (
        <div className={styles.adminContainer}>
          <div>
            <img src={logo} alt="logo" className={styles.logo} />
            <span className={styles.adminTxt}>Admin</span>
          </div>
          <div className={styles.title}>계좌이체 결제 신청 내역</div>
          <div className={styles.box}>
            <div className={styles.nftName}>핸드볼 팀과 연습 경기 NFT</div>
            <div className={styles.date}>일시: 2023.01.15.17:34</div>
            <div className={styles.id}>ID: jinseongbe </div>
            <div className={styles.price}>금액: 100,000원</div>
            <div className={styles.customer}>예금주: 박진성</div>
            <button className={styles.confirmBtn}>확인</button>
          </div>
          <div className={styles.box}>
            <div className={styles.nftName}>핸드볼 팀과 연습 경기 NFT</div>
            <div className={styles.date}>일시: 2023.01.15.17:34</div>
            <div className={styles.id}>ID: jinseongbe </div>
            <div className={styles.price}>금액: 100,000원</div>
            <div className={styles.customer}>예금주: 박진성</div>
            <button className={styles.confirmBtn}>확인</button>
          </div>
          <div className={styles.box}>
            <div className={styles.nftName}>핸드볼 팀과 연습 경기 NFT</div>
            <div className={styles.date}>일시: 2023.01.15.17:34</div>
            <div className={styles.id}>ID: jinseongbe </div>
            <div className={styles.price}>금액: 100,000원</div>
            <div className={styles.customer}>예금주: 박진성</div>
            <button className={styles.confirmBtn}>확인</button>
          </div>
          <div className={styles.box}>
            <div className={styles.nftName}>핸드볼 팀과 연습 경기 NFT</div>
            <div className={styles.date}>일시: 2023.01.15.17:34</div>
            <div className={styles.id}>ID: jinseongbe </div>
            <div className={styles.price}>금액: 100,000원</div>
            <div className={styles.customer}>예금주: 박진성</div>
            <button className={styles.confirmBtn}>확인</button>
          </div>
          <div className={styles.box}>
            <div className={styles.nftName}>핸드볼 팀과 연습 경기 NFT</div>
            <div className={styles.date}>일시: 2023.01.15.17:34</div>
            <div className={styles.id}>ID: jinseongbe </div>
            <div className={styles.price}>금액: 100,000원</div>
            <div className={styles.customer}>예금주: 박진성</div>
            <button className={styles.confirmBtn}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
