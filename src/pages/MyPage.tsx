import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./MyPage.module.css";
import PersonCard from "../components/PersonCard";

import s3 from "../assets/image/s3.png";
import Footer from "../components/Footer";
import { useMediaQuery } from "react-responsive";
import supabase from "../config/supabaseClient";
import AuthContext from "../store/auth-context";

const MyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMobileSmall = useMediaQuery({ maxWidth: 490 });
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
    publisher: number;
    sold_num: number;
    title: string;
    total_num: number;
  }

  const authCtx = useContext(AuthContext);
  const [myAccData, setMyAccData] = useState<any>(null);
  const [registerDay, setregisterDay] = useState<number | null>(null);

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (Array.isArray(accounts)) {
          const { data, error } = await supabase
            .from("account")
            .select()
            .eq("metaaddress", accounts[0]);

          if (Array.isArray(data) && data.length !== 0) {
            setMyAccData(data);
            console.log(data);
            authCtx.onLogin(data[0].nickname, data[0].metaaddress);

            const date_ = new Date(data[0].inserted_at);
            const now = new Date();
            console.log(
              Math.round(
                (now.getTime() - date_.getTime()) / (1000 * 60 * 60 * 24)
              )
            );
            const days = Math.round(
              (now.getTime() - date_.getTime()) / (1000 * 60 * 60 * 24)
            );

            setregisterDay(days);
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

  const [campaignData, setCampaignData] = useState<any | []>();
  const getData = async () => {
    const { data, error } = await supabase.from("campaign").select();
    console.log(data);

    if (data) {
      setCampaignData(data.slice(0, 2));
    }
  };

  const [nftData, setNftData] = useState<any | []>();
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
    getAccount();
    getData();
    getNftData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      {myAccData && (
        <div
          className={
            isMobile ? styles.mainSubContainerM : styles.mainSubContainer
          }
        >
          {!isMobile && <div className={styles.title}>마이 페이지</div>}
          <div className={isMobile ? styles.infoCardM : styles.infoCard}>
            <div className={styles.nickname}>
              {myAccData[0].nickname}
              <span className={styles.registerDate}>
                {registerDay}일 전 가입
              </span>
            </div>
            <div className={styles.email}>이메일: {myAccData[0].email}</div>
            <div className={styles.address}>
              지갑 주소: {myAccData[0].metaaddress}
            </div>
            <div
              className={
                isMobile ? styles.mydataContainerM : styles.mydataContainer
              }
            >
              <div className={styles.subContainer}>
                <div className={isMobile ? styles.subTitleM : styles.subTitle}>
                  후원 프로젝트
                </div>
                <div className={styles.subContents}>
                  2<span className={styles.subContentsTxt}>개</span>
                </div>
              </div>
              <div className={styles.subContainer}>
                <div className={isMobile ? styles.subTitleM : styles.subTitle}>
                  NFTs
                </div>
                <div className={styles.subContents}>
                  10<span className={styles.subContentsTxt}>개</span>
                </div>
              </div>
              <div className={styles.subContainer}>
                <div className={isMobile ? styles.subTitleM : styles.subTitle}>
                  누적 후원금
                </div>
                <div className={styles.subContents}>
                  700,000<span className={styles.subContentsTxt}>원</span>
                </div>
              </div>
            </div>
          </div>

          {isMobile && <div className={styles.section}></div>}

          <div className={isMobile ? styles.titleM : styles.title}>
            후원 참여 프로젝트
          </div>
          <div
            className={
              isMobile ? styles.projectContainerM : styles.projectContainer
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
                    className={isMobileSmall ? styles.cardM : styles.card}
                    key={id}
                  >
                    <PersonCard
                      id={id}
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

          {isMobile && <div className={styles.section}></div>}

          <div className={isMobile ? styles.titleM : styles.title}>
            내가 소유한 NFTs
          </div>
          <div
            className={
              isMobile ? styles.projectContainerM : styles.projectContainer
            }
          >
            {nftData &&
              nftData.map(
                ({ id, img, price, sold_num, title, total_num }: Nft_Data) => (
                  <div
                    key={id}
                    className={isMobile ? styles.nftCardM : styles.nftCard}
                  >
                    <img
                      src={img}
                      className={isMobile ? styles.cardImgM : styles.cardImg}
                      alt="nftImg"
                    />
                    <div
                      className={
                        isMobile ? styles.txtContainerM : styles.txtContainer
                      }
                    >
                      <div className={styles.nftCardTitle}>{title}</div>
                      <div className={styles.nftNum}>{total_num}개 발행</div>
                      <div className={styles.nftPrice}>
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </div>
                      <div className={styles.txtSubContainer}>
                        <div className={styles.remainNum}>
                          {total_num - sold_num}개 남음
                        </div>
                        <button className={styles.buyBtn}>상세보기</button>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MyPage;
