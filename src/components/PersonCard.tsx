import React from "react";
import styles from "./PersonCard.module.css";

const exData = {
  id: "0",
  lastName: "Park",
  fristName: "Jinsung",
  email: "jinseongbe@gmail.com",
  sex: "male",
  metamaskAddress: "0x000000000000000000000",
  activeState: "1",

  // 아래 정보는 다른 데이터 테이블에서 조인해서 가져왔다는 것을 가정하고 작성
  title: "유럽 리그에 진출하고 싶어요 도와주십쇼",

  //sns
  instagram: "https://www.instagram.com/jlnsung.p/",
  youtube: "https://www.youtube.com/@jinseongbe.",
  twitter: "https://twitter.com/jinseongbe",
  facebook: "https://facebook.com/jinseongbe",
  telegram: "jinseongbe",
  kakaoOpen: "jinseongbe",
};

const PersonCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div>{exData.id}</div>
      <div>{exData.lastName}</div>
      <div>{exData.fristName}</div>
      <div>{exData.email}</div>
    </div>
  );
};

export default PersonCard;
