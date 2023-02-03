import React from "react";
import NavBar from "../components/NavBar";
import styles from "./MyPage.module.css";
import PersonCard from "../components/PersonCard";

import s3 from "../assets/image/s3.png";
import Footer from "../components/Footer";

const MyPage = () => {
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

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.mainSubContainer}>
        <div className={styles.title}>마이 페이지</div>
        <div className={styles.infoCard}>
          <div className={styles.nickname}>
            jinseongbe<span className={styles.registerDate}>3일 전 가입</span>
          </div>
          <div className={styles.email}>이메일: jinseongbe@gmail.com</div>
          <div className={styles.address}>
            지갑 주소: 0x6f2778462889a7d31b4e1250ba073748cf39eaf9
          </div>
          <div className={styles.mydataContainer}>
            <div className={styles.subContainer}>
              <div className={styles.subTitle}>후원 프로젝트</div>
              <div className={styles.subContents}>
                2<span className={styles.subContentsTxt}>개</span>
              </div>
            </div>
            <div className={styles.subContainer}>
              <div className={styles.subTitle}>NFTs</div>
              <div className={styles.subContents}>
                10<span className={styles.subContentsTxt}>개</span>
              </div>
            </div>
            <div className={styles.subContainer}>
              <div className={styles.subTitle}>누적 후원금</div>
              <div className={styles.subContents}>
                700,000<span className={styles.subContentsTxt}>원</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.title}>후원 참여 프로젝트</div>
        <div className={styles.projectContainer}>
          <div className={styles.card}>
            <PersonCard
              id={0}
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
          <div className={styles.card}>
            <PersonCard
              id={0}
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
          <div className={styles.card}>
            <PersonCard
              id={0}
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

        <div className={styles.title}>내가 소유한 NFTs</div>
        <div className={styles.projectContainer}>
          <div className={styles.nftCard}>
            <img src={s3} className={styles.cardImg} alt="nftImg" />
            <div className={styles.txtContainer}>
              <div className={styles.nftCardTitle}>핸드볼 팀과 연습 경기</div>
              <div className={styles.nftNum}>100개 발행</div>
              <div className={styles.nftPrice}>100,000원</div>
              <div className={styles.txtSubContainer}>
                <div className={styles.remainNum}>2개 남음</div>
                <button className={styles.buyBtn}>상세보기</button>
              </div>
            </div>
          </div>
          <div className={styles.nftCard}>
            <img src={s3} className={styles.cardImg} alt="nftImg" />
            <div className={styles.txtContainer}>
              <div className={styles.nftCardTitle}>핸드볼 팀과 연습 경기</div>
              <div className={styles.nftNum}>100개 발행</div>
              <div className={styles.nftPrice}>100,000원</div>
              <div className={styles.txtSubContainer}>
                <div className={styles.remainNum}>2개 남음</div>
                <button className={styles.buyBtn}>상세보기</button>
              </div>
            </div>
          </div>
          <div className={styles.nftCard}>
            <img src={s3} className={styles.cardImg} alt="nftImg" />
            <div className={styles.txtContainer}>
              <div className={styles.nftCardTitle}>핸드볼 팀과 연습 경기</div>
              <div className={styles.nftNum}>100개 발행</div>
              <div className={styles.nftPrice}>100,000원</div>
              <div className={styles.txtSubContainer}>
                <div className={styles.remainNum}>2개 남음</div>
                <button className={styles.buyBtn}>상세보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
