import React, { useEffect, useState } from "react";
import styles from "./PersonCard.module.css";
import s3 from "../assets/image/s3.png";
import { Link } from "react-router-dom";

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

export interface propsType {
  id: number;
  item: string;
  player: string;
  cardTitle: string;
  cardDetail: string;
  tempPercent: number;
  totalSell: number;
  remainNFT: number;
  titleImgUrl: string;
  className: string;
}

const PersonCard = ({
  id,
  titleImgUrl,
  item,
  player,
  cardTitle,
  cardDetail,
  tempPercent,
  totalSell,
  remainNFT,
  className,
}: propsType) => {
  const [url, setUrl] = useState<string>(`/${id}`);

  useEffect(() => {
    console.log(window.location.href);
    if (window.location.href == "http://localhost:3000/") {
      setUrl(`campaign/${id}`);
    }
    if (window.location.href == "http://localhost:3000/campaign") {
      setUrl(`./${id}`);
    }
    if (window.location.href == "http://localhost:3000/mypage") {
      setUrl(`../campaign/${id}`);
    }

    if (window.location.href == "https://www.sponance.com/") {
      setUrl(`campaign/${id}`);
    }
    if (window.location.href == "https://www.sponance.com/campaign") {
      setUrl(`./${id}`);
    }
    if (window.location.href == "https://www.sponance.com/mypage") {
      setUrl(`../campaign/${id}`);
    }
  }, []);

  return (
    <Link to={url} className={styles.cardContainer}>
      <img className={styles.profileImg} src={titleImgUrl} />
      <div className={styles.itemAndPlayerTxt}>
        {item}&nbsp;|&nbsp;{player}
      </div>
      <div className={styles.title}>{cardTitle}</div>
      <div className={styles.detail}>{cardDetail}</div>
      <div className={styles.subContainer}>
        <div className={styles.subContainer2}>
          <div className={styles.percent}>{tempPercent}%</div>
          <div className={styles.totalsell}>
            {totalSell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </div>
        </div>
        <div className={styles.remainNFT}>
          NFT {remainNFT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개
          남음
        </div>
      </div>
      <div className={styles.barContainer}>
        <div className={styles.yellowBar}></div>
        <div
          style={{
            width: `${(tempPercent / 100) * 230}px`,
          }}
          className={styles.blueBar}
        ></div>
      </div>
    </Link>
  );
};

export default PersonCard;
