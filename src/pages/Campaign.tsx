import React from "react";
import NavBar from "../components/NavBar";
import styles from "./Campaign.module.css";

import s2 from "../assets/image/s2.png";
import s3 from "../assets/image/s3.png";
import PersonCard from "../components/PersonCard";
import Footer from "../components/Footer";

const exData = {
  id: "0",
  lastName: "Park",
  fristName: "Jinsung",
  email: "jinseongbe@gmail.com",
  sex: "male",
  metamaskAddress: "0x000000000000000000000",
  activeState: "1",

  // 아래 정보는 다른 데이터 테이블에서 조인해서 가져왔다는 것을 가정하고 작성

  //sns
  instagram: "https://www.instagram.com/jlnsung.p/",
  youtube: "https://www.youtube.com/@jinseongbe.",
  twitter: "https://twitter.com/jinseongbe",
  facebook: "https://facebook.com/jinseongbe",
  telegram: "jinseongbe",
  kakaoOpen: "jinseongbe",

  // contents
  item: "핸드볼",
  player: "롯데팀",
  cardTitle: "핸드볼 선수의 해외 출전을 도와주세요",
  cardDetail: "저희는 이러 저러한 사정으로 도움을 필요합니다. 이러쿵 저러쿵",
  tempPercent: 68,
  totalSell: 887000,
  remainNFT: 243,
  titleImgUrl: s3,
};

const Campaign = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.banner}>
        <img src={s2} alt="banner" className={styles.bannerImg} />
        <div className={styles.blur} />
        <div className={styles.bannerTxt}>
          <span className={styles.colorBar}>|</span>대충 후원을 독려하는 문구,,,
        </div>
      </div>

      <div className={styles.fillterContainer}>
        <div className={styles.subContainer}>
          <div className={styles.title}>전체</div>
          <div className={styles.sportFillterContainer}>
            <div className={styles.sportFillterTxt}>핸드볼</div>
            <div className={styles.sportFillterTxt}>농구</div>
            <div className={styles.sportFillterTxt}>축구</div>
            <div className={styles.sportFillterTxt}>야구</div>
          </div>
        </div>

        <div className={styles.basicFillterContainer}>
          <div className={styles.basicFillterTxt}>인기순</div>
          <div className={styles.basicFillterTxt}>최신순</div>
          <div className={styles.basicFillterTxt}>후원금순</div>
          <div className={styles.basicFillterTxt}>후원 참여자순</div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.cardBox}>
          <PersonCard
            className={styles.card}
            titleImgUrl={exData.titleImgUrl}
            item={exData.item}
            player={exData.player}
            cardTitle={exData.cardTitle}
            cardDetail={exData.cardDetail}
            tempPercent={exData.tempPercent}
            totalSell={exData.totalSell}
            remainNFT={exData.remainNFT}
          />
        </div>
        <div className={styles.cardBox}>
          <PersonCard
            className={styles.card}
            titleImgUrl={exData.titleImgUrl}
            item={exData.item}
            player={exData.player}
            cardTitle={exData.cardTitle}
            cardDetail={exData.cardDetail}
            tempPercent={exData.tempPercent}
            totalSell={exData.totalSell}
            remainNFT={exData.remainNFT}
          />
        </div>
        <div className={styles.cardBox}>
          <PersonCard
            className={styles.card}
            titleImgUrl={exData.titleImgUrl}
            item={exData.item}
            player={exData.player}
            cardTitle={exData.cardTitle}
            cardDetail={exData.cardDetail}
            tempPercent={exData.tempPercent}
            totalSell={exData.totalSell}
            remainNFT={exData.remainNFT}
          />
        </div>
        <div className={styles.cardBox}>
          <PersonCard
            className={styles.card}
            titleImgUrl={exData.titleImgUrl}
            item={exData.item}
            player={exData.player}
            cardTitle={exData.cardTitle}
            cardDetail={exData.cardDetail}
            tempPercent={exData.tempPercent}
            totalSell={exData.totalSell}
            remainNFT={exData.remainNFT}
          />
        </div>
        <div className={styles.cardBox}>
          <PersonCard
            className={styles.card}
            titleImgUrl={exData.titleImgUrl}
            item={exData.item}
            player={exData.player}
            cardTitle={exData.cardTitle}
            cardDetail={exData.cardDetail}
            tempPercent={exData.tempPercent}
            totalSell={exData.totalSell}
            remainNFT={exData.remainNFT}
          />
        </div>
        <div className={styles.cardBox}>
          <PersonCard
            className={styles.card}
            titleImgUrl={exData.titleImgUrl}
            item={exData.item}
            player={exData.player}
            cardTitle={exData.cardTitle}
            cardDetail={exData.cardDetail}
            tempPercent={exData.tempPercent}
            totalSell={exData.totalSell}
            remainNFT={exData.remainNFT}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Campaign;
