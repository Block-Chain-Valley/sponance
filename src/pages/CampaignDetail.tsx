import React, { useContext, useEffect, useState } from "react";
import styles from "./CampaignDetail.module.css";

import s4 from "../assets/image/s4.png";
import s3 from "../assets/image/s3.png";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import supabase from "../config/supabaseClient";
import { useMediaQuery } from "react-responsive";

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

const CampaignDetail = () => {
  const params = useParams();
  console.log(params);

  const [showStory, setShwoStory] = useState<boolean>(true);
  const [campaignData, setCampaignData] = useState<any | []>();
  const [nftData, setNftData] = useState<any | []>();

  const showStoryBtnActivate = () => {
    setShwoStory(true);
  };

  const showNftsBtnActivate = () => {
    setShwoStory(false);
  };

  const getData = async () => {
    const { data, error } = await supabase
      .from("campaign")
      .select()
      .eq("id", params.id);
    console.log(data);
    if (data) {
      setCampaignData(data);
    }
  };

  const getNftData = async () => {
    const { data, error } = await supabase
      .from("nft_detail")
      .select()
      .eq("campaign_id", params.id);
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

  const isMobile = useMediaQuery({ maxWidth: 1200 });

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      {campaignData ? (
        <div
          className={
            isMobile ? styles.mainSubContainerMobile : styles.mainSubContainer
          }
        >
          <div className={isMobile ? styles.leftContainer : ""}>
            <img
              className={isMobile ? styles.imgMobile : styles.img}
              src={campaignData[0].title_img}
              alt="player_image"
            />
            <div
              className={isMobile ? styles.barContainerM : styles.barContainer}
            >
              <div
                className={
                  isMobile ? styles.txtContainer1M : styles.txtContainer1
                }
              >
                <div className={styles.barTxt1}>₩887,000</div>
                <div className={styles.barTxt2}>₩1,200,000</div>
              </div>

              <div
                className={isMobile ? styles.yellowBarM : styles.yellowBar}
              ></div>
              <div className={isMobile ? styles.blueBarM : styles.blueBar}>
                68%
              </div>
            </div>

            {isMobile && (
              <div className={styles.topContainerM}>
                <div className={styles.title}>{campaignData[0].card_title}</div>
                <div className={styles.teams}>
                  {campaignData[0].item} | {campaignData[0].player}
                </div>
                <div className={isMobile ? styles.introTxtM : styles.introTxt}>
                  {campaignData[0].card_detail}
                </div>
                <div className={styles.MSubContainer}>
                  <div className={styles.achieveTxt}>
                    68<span className={styles.achieveTxt2}>% 달성</span>
                  </div>
                  <div className={styles.totalPrice}>
                    887,000
                    <span className={styles.totalPrice2}>원 62명 참여</span>
                  </div>
                </div>
              </div>
            )}

            {isMobile && <div className={styles.section}></div>}

            <div className={styles.selectContainer}>
              <div
                className={showStory ? styles.storyBtnClicked : styles.storyBtn}
                onClick={showStoryBtnActivate}
              >
                스토리
              </div>
              <div
                className={showStory ? styles.storyBtn : styles.storyBtnClicked}
                onClick={showNftsBtnActivate}
              >
                후원자
              </div>
            </div>

            {showStory && (
              <div className={styles.contentsContainer}>
                <div
                  className={
                    isMobile ? styles.contentsHead1M : styles.contentsHead1
                  }
                >
                  안녕하세요 저희는 누구누구 입니다.! 안녕하세요 저희는 누구누구
                  입니다.! 안녕하세요 안녕하세요 저희는 누구누구 입니다.!
                  안녕하세요 저희는 누구누구 입니다.! 안녕하세요
                </div>
                <div
                  className={
                    isMobile ? styles.contentsTxtM : styles.contentsTxt
                  }
                >
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런 이런 이런 사연으로 저희는 이런
                  이런 이런 사연으로 저희는 이런{" "}
                </div>
              </div>
            )}
            {!showStory && (
              <div
                className={
                  isMobile ? styles.sponsorContainerM : styles.sponsorContainer
                }
              >
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>jinseongbe</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 8개 구매</div>
                    <div className={styles.sponPrice}>800,000원</div>
                  </div>
                </div>
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>jinseongbe</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 8개 구매</div>
                    <div className={styles.sponPrice}>800,000원</div>
                  </div>
                </div>
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>jinseongbe</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 8개 구매</div>
                    <div className={styles.sponPrice}>800,000원</div>
                  </div>
                </div>
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>jinseongbe</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 8개 구매</div>
                    <div className={styles.sponPrice}>800,000원</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={
              isMobile ? styles.rightContainerM : styles.rightContainer
            }
          >
            {!isMobile && (
              <div className={styles.topContainer}>
                <div className={styles.title}>{campaignData[0].card_title}</div>
                <div className={styles.teams}>
                  {campaignData[0].item} | {campaignData[0].player}
                </div>
                <div className={styles.introTxt}>
                  {campaignData[0].card_detail}
                </div>
                <div className={styles.achieveTxt}>
                  68<span className={styles.achieveTxt2}>% 달성</span>
                </div>
                <div className={styles.totalPrice}>
                  887,000
                  <span className={styles.totalPrice2}>원 62명 참여</span>
                </div>
              </div>
            )}

            {isMobile && <div className={styles.section2}></div>}

            <div
              className={
                isMobile ? styles.bottomContainerM : styles.bottomContainer
              }
            >
              <div className={styles.bottomTitle}>후원 가능한 NFTS</div>
              <div
                className={
                  isMobile ? styles.nftContainerM : styles.nftContainer
                }
              >
                {nftData &&
                  nftData.map(
                    ({
                      id,
                      img,
                      price,
                      sold_num,
                      title,
                      total_num,
                    }: Nft_Data) => (
                      <div
                        className={isMobile ? styles.nftCardM : styles.nftCard}
                      >
                        <img
                          src={img}
                          className={
                            isMobile ? styles.cardImgM : styles.cardImg
                          }
                          alt="nftImg"
                        />
                        <div
                          className={
                            isMobile
                              ? styles.txtContainerM
                              : styles.txtContainer
                          }
                        >
                          <div className={styles.nftCardTitle}>{title}</div>
                          <div className={styles.nftNum}>
                            {total_num}개 발행
                          </div>
                          <div className={styles.nftPrice}>
                            {price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </div>
                          <div className={styles.txtSubContainer}>
                            <div className={styles.remainNum}>
                              {total_num - sold_num}개 남음
                            </div>
                            <Link
                              to={`payment/${id}`}
                              className={styles.buyBtn}
                            >
                              구매하기
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
      <Footer />
    </div>
  );
};

export default CampaignDetail;
