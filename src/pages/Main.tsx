import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PersonCard from "../components/PersonCard";
import styles from "./Main.module.css";
import FeatureNFTCard from "../components/FeatureNFTCard";
import Footer from "../components/Footer";
import { useMediaQuery } from "react-responsive";

import donateBtn from "../assets/image/bottomBannerBtn.png";
import {
  SponsorRankCard,
  SponsorRankCard_Data,
} from "../components/SponsorRankCard";
import { NFTRankCard, NFTRankCard_Data } from "../components/NFTRankCard";

// 추후 supabase 서버로 연동하여 불러올 예정
import s1 from "../assets/image/s1.png";
import s2 from "../assets/image/s2.png";
import s3 from "../assets/image/s3.png";
import supabase from "../config/supabaseClient";
import ex2 from "../assets/image/ex2.jpeg";

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

const exData2 = [
  { order: 0, nickname: "jinseonge", donateNum: 5, totalDonate: 126000 },
  { order: 0, nickname: "jinseonge2", donateNum: 4, totalDonate: 126000 },
  { order: 0, nickname: "jinseonge3", donateNum: 5, totalDonate: 116000 },
  { order: 0, nickname: "jinseonge4", donateNum: 7, totalDonate: 96000 },
  { order: 0, nickname: "jinseonge5", donateNum: 30, totalDonate: 76000 },
  { order: 0, nickname: "jinseonge6", donateNum: 29, totalDonate: 69000 },
  { order: 0, nickname: "jinseonge7", donateNum: 20, totalDonate: 55000 },
  { order: 0, nickname: "jinseonge8", donateNum: 8, totalDonate: 34000 },
  { order: 0, nickname: "jinseonge9", donateNum: 9, totalDonate: 23000 },
];

const exData4 = [
  {
    order: 0,
    imgURL: s1,
    item: "핸드볼",
    player: "롯데팀",
    cardTitle: "핸드볼 팀과의 연습경기",
    nftPrice: 100000,
    remainNFT: 243,
  },
  {
    order: 0,
    imgURL: s1,
    item: "핸드볼",
    player: "롯데팀",
    cardTitle: "핸드볼 팀과의 연습경기",
    nftPrice: 100000,
    remainNFT: 243,
  },
  {
    order: 0,
    imgURL: s1,
    item: "핸드볼",
    player: "롯데팀",
    cardTitle: "핸드볼 팀과의 연습경기",
    nftPrice: 100000,
    remainNFT: 243,
  },
  {
    order: 0,
    imgURL: s1,
    item: "핸드볼",
    player: "롯데팀",
    cardTitle: "핸드볼 팀과의 연습경기",
    nftPrice: 100000,
    remainNFT: 243,
  },
  {
    order: 0,
    imgURL: s1,
    item: "핸드볼",
    player: "롯데팀",
    cardTitle: "핸드볼 팀과의 연습경기",
    nftPrice: 100000,
    remainNFT: 243,
  },
];

const exData3 = {
  imgURL: s1,
  item: "핸드볼",
  player: "롯데팀",
  cardTitle: "핸드볼 팀과의 연습경기",
  nftPrice: 100000,
  remainNFT: 243,
};

interface Campaign_Data {
  card_detail: string;
  card_title: string;
  created_at: string;
  id: number;
  item: string;
  player: string;
  title_img: string;
  project_owner: number;
}

const Main = () => {
  const [showNFTRanking, setShowNFTRanking] = useState<boolean>(false);
  const [campaignData, setCampaignData] = useState<any | []>();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const rankDateBtnActive = () => {
    setShowNFTRanking(false);
  };

  const rankNftBtnActive = () => {
    setShowNFTRanking(true);
  };

  const getData = async () => {
    const { data, error } = await supabase.from("campaign").select();
    console.log(data);
    if (data) {
      setCampaignData(data);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  return (
    <div
      className={isMobile ? styles.mainContainerMobile : styles.mainContainer}
    >
      <NavBar />
      <div className={isMobile ? styles.bannerMobile : styles.banner}>
        <img src={ex2} alt="banner" className={styles.bannerImg} />
        <div className={styles.blur} />

        <div className={styles.bannerTxt}>
          <span className={styles.colorBar}>|</span>고려대학교 농구부 ZOO에게
          힘을 실어주세요
        </div>
      </div>
      <div
        className={
          isMobile ? styles.secondContainerMibile : styles.secondContainer
        }
      >
        <div className={styles.cardContainer}>
          <div className={isMobile ? styles.cardTitleMobie : styles.cardTitle}>
            스포낸스 펀딩
          </div>
          <div
            className={
              isMobile ? styles.cardSubContainerMobile : styles.cardSubContainer
            }
          >
            {campaignData &&
              campaignData.map(
                ({
                  card_detail,
                  card_title,
                  id,
                  item,
                  player,
                  title_img,
                }: Campaign_Data) => (
                  <div
                    className={isMobile ? styles.cardMobile : styles.card}
                    key={id}
                  >
                    <PersonCard
                      id={id}
                      className={styles.card}
                      titleImgUrl={title_img}
                      item={item}
                      player={player}
                      cardTitle={card_title}
                      cardDetail={card_detail}
                      tempPercent={exData.tempPercent}
                      totalSell={exData.totalSell}
                      remainNFT={exData.remainNFT}
                    />
                  </div>
                )
              )}
          </div>
        </div>

        {isMobile && <div className={styles.section}></div>}

        <div
          className={
            isMobile ? styles.rankingContainerMobile : styles.rankingContainer
          }
        >
          <div
            className={
              isMobile ? styles.rankingTitleMobile : styles.rankingTitle
            }
          >
            실시간 랭킹
          </div>
          <div className={styles.rankings}>
            <div className={styles.rankingSubContainer}>
              <button
                className={
                  showNFTRanking
                    ? styles.rankDonateBtn
                    : styles.rankDonateBtnClicked
                }
                onClick={rankDateBtnActive}
              >
                후원자
              </button>
              <button
                className={
                  showNFTRanking ? styles.rankNFTBtnClicked : styles.rankNFTBtn
                }
                onClick={rankNftBtnActive}
              >
                NFT
              </button>
            </div>
            {showNFTRanking
              ? exData4.map(
                  (
                    {
                      imgURL,
                      item,
                      player,
                      cardTitle,
                      nftPrice,
                      remainNFT,
                    }: NFTRankCard_Data,
                    index
                  ) => (
                    <NFTRankCard
                      order={index}
                      imgURL={imgURL}
                      item={item}
                      player={player}
                      cardTitle={cardTitle}
                      nftPrice={nftPrice}
                      remainNFT={remainNFT}
                    />
                  )
                )
              : exData2.map(
                  (
                    {
                      order,
                      nickname,
                      donateNum,
                      totalDonate,
                    }: SponsorRankCard_Data,
                    index
                  ) => (
                    <div key={index}>
                      <SponsorRankCard
                        order={index}
                        nickname={nickname}
                        donateNum={donateNum}
                        totalDonate={totalDonate}
                      />
                    </div>
                  )
                )}
          </div>
        </div>
      </div>

      {isMobile && <div className={styles.section}></div>}

      <div
        className={
          isMobile ? styles.featureContainerMobile : styles.featureContainer
        }
      >
        <div
          className={isMobile ? styles.featureTitleMobile : styles.featureTitle}
        >
          얼마 안남았어요! 품절 임박 NFT
        </div>
        <div
          className={
            isMobile
              ? styles.featureNFTsContainerMobile
              : styles.featureNFTsContainer
          }
        >
          <div className={isMobile ? styles.cardMobileNFT : ""}>
            <FeatureNFTCard
              imgURL={exData3.imgURL}
              item={exData3.item}
              cardTitle={exData3.cardTitle}
              player={exData3.player}
              nftPrice={exData3.nftPrice}
              remainNFT={exData3.remainNFT}
            />
          </div>
          <div className={isMobile ? styles.cardMobileNFT : ""}>
            <FeatureNFTCard
              imgURL={exData3.imgURL}
              item={exData3.item}
              cardTitle={exData3.cardTitle}
              player={exData3.player}
              nftPrice={exData3.nftPrice}
              remainNFT={exData3.remainNFT}
            />
          </div>{" "}
          <div className={isMobile ? styles.cardMobileNFT : ""}>
            <FeatureNFTCard
              imgURL={exData3.imgURL}
              item={exData3.item}
              cardTitle={exData3.cardTitle}
              player={exData3.player}
              nftPrice={exData3.nftPrice}
              remainNFT={exData3.remainNFT}
            />
          </div>{" "}
          <div className={isMobile ? styles.cardMobileNFT : ""}>
            <FeatureNFTCard
              imgURL={exData3.imgURL}
              item={exData3.item}
              cardTitle={exData3.cardTitle}
              player={exData3.player}
              nftPrice={exData3.nftPrice}
              remainNFT={exData3.remainNFT}
            />
          </div>{" "}
          <div className={isMobile ? styles.cardMobileNFT : ""}>
            <FeatureNFTCard
              imgURL={exData3.imgURL}
              item={exData3.item}
              cardTitle={exData3.cardTitle}
              player={exData3.player}
              nftPrice={exData3.nftPrice}
              remainNFT={exData3.remainNFT}
            />
          </div>
        </div>
      </div>
      <div
        className={
          isMobile
            ? styles.bottomBannerContainerMobile
            : styles.bottomBannerContainer
        }
      >
        <div className={styles.blur2}> </div>
        <a href="https://forms.gle/aQeP6PaUQsT8j6As5" target="_blank">
          <img src={donateBtn} className={styles.donateBtn} alt="btn" />
        </a>

        <img src={s1} alt="bottomBanner" className={styles.bottomBannerImg} />
        <div className={styles.bottomBannerTitle}>SPONANCE 후원 신청하기</div>
        <div className={styles.bottomBannerDetail}>
          자신의 이야기를 소개하고, 후원자를 만나보세요.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
