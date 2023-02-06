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
  { order: 0, nickname: "Camrilia", donateNum: 5, totalDonate: 126000 },
  { order: 0, nickname: "Talmarad", donateNum: 4, totalDonate: 126000 },
  { order: 0, nickname: "Twolmerht", donateNum: 5, totalDonate: 116000 },
  { order: 0, nickname: "Duine", donateNum: 7, totalDonate: 96000 },
  { order: 0, nickname: "Audocus", donateNum: 30, totalDonate: 76000 },
  { order: 0, nickname: "Brondor", donateNum: 29, totalDonate: 69000 },
  { order: 0, nickname: "Caircello", donateNum: 20, totalDonate: 55000 },
  { order: 0, nickname: "Isineldoar", donateNum: 8, totalDonate: 34000 },
  { order: 0, nickname: "Tujenn", donateNum: 9, totalDonate: 23000 },
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
  temp_current_price: number;
  temp_max_price: number;
}

interface Nft_Data {
  campaign_id: number;
  created_at: string;
  detail: string;
  id: number;
  img: string;
  price: number;
  sold_num: number;
  title: string;
  total_num: number;
  item: string;
  player: string;
}

const Main = () => {
  const [showNFTRanking, setShowNFTRanking] = useState<boolean>(false);
  const [campaignData, setCampaignData] = useState<any | []>();
  const [nftData, setNftData] = useState<any | []>();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMobileSmall = useMediaQuery({ maxWidth: 490 });

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

  const getNftData = async () => {
    const { data, error } = await supabase.from("nft_detail").select();
    console.log(data);
    if (data) {
      setNftData(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    getNftData();
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
                  temp_current_price,
                  temp_max_price,
                }: Campaign_Data) => (
                  <div
                    className={isMobileSmall ? styles.cardMobile : styles.card}
                    key={id}
                  >
                    <PersonCard
                      id={id}
                      // className={styles.card}
                      titleImgUrl={title_img}
                      item={item}
                      player={player}
                      cardTitle={card_title}
                      cardDetail={card_detail}
                      tempPercent={Math.ceil(
                        (temp_current_price / temp_max_price) * 100
                      )}
                      totalSell={temp_current_price}
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
              ? nftData.map(
                  (
                    {
                      campaign_id,
                      created_at,
                      detail,
                      id,
                      img,
                      price,
                      sold_num,
                      title,
                      item,
                      player,
                      total_num,
                    }: Nft_Data,
                    index: any
                  ) => (
                    <NFTRankCard
                      campaignId={campaign_id}
                      order={index}
                      imgURL={img}
                      item={item}
                      player={player}
                      cardTitle={title}
                      nftPrice={price}
                      remainNFT={total_num - sold_num}
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
          {nftData &&
            nftData.map(
              ({
                campaign_id,
                created_at,
                detail,
                id,
                img,
                price,
                sold_num,
                title,
                item,
                player,
                total_num,
              }: Nft_Data) => (
                <div key={id} className={isMobile ? styles.cardMobileNFT : ""}>
                  <FeatureNFTCard
                    campaign_id={campaign_id}
                    imgURL={img}
                    item={item}
                    cardTitle={title}
                    player={player}
                    nftPrice={price}
                    remainNFT={total_num - sold_num}
                  />
                </div>
              )
            )}
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
        <div className={styles.bottomBannerTitle}>SPONANCE 펀딩 신청하기</div>
        <div className={styles.bottomBannerDetail}>
          자신의 이야기를 소개하고, 후원자를 만나보세요.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
