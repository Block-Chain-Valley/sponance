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

  // const percent = Math.ceil(
  //   (campaignData[0].temp_current_price / campaignData[0].temp_max_price) * 100
  // );

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
                <div className={styles.barTxt1}>
                  ₩
                  {campaignData[0].temp_current_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className={styles.barTxt2}>
                  ₩
                  {campaignData[0].temp_max_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>

              <div
                className={isMobile ? styles.yellowBarM : styles.yellowBar}
              ></div>
              <div
                style={{
                  width: `${(Math.ceil(
                    (campaignData[0].temp_current_price /
                      campaignData[0].temp_max_price) *
                      100
                  ) /
                    100) *
                    649}px`,
                }}
                className={isMobile ? styles.blueBarM : styles.blueBar}
              >
                {Math.ceil(
                  (campaignData[0].temp_current_price /
                    campaignData[0].temp_max_price) *
                    100
                )}
                %
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
                    {Math.ceil(
                      (campaignData[0].temp_current_price /
                        campaignData[0].temp_max_price) *
                        100
                    )}
                    <span className={styles.achieveTxt2}>% 달성</span>
                  </div>
                  <div className={styles.totalPrice}>
                    {campaignData[0].temp_current_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                  안녕하세요 저희는 고려대학교 체육교육과 농구동아리 ZOO입니다.
                </div>
                <div
                  className={
                    isMobile ? styles.contentsTxtM : styles.contentsTxt
                  }
                >
                  저희는 완전히 학생이 운영하는 자기 자금으로 운영되는 팀입니다.
                  팀원들은 매주 12시간 이상을 팀 운동 및 개인 운동을 하고 있으며
                  단대흑곰배, 과기대배, 단대범정배, 시립대배, 항공대배,
                  국민대배, 연세대배, KUSF, 아마추어 고연전 등 다양한 농구대회에
                  참가하여 우수한 성적을 거두기 위해 노력하고 있습니다. 최근
                  코로나로 인해 팀 운동이 어려운 상황이었으며 팀원간, 선후배간의
                  교류가 불가능한 상황이 이어지며 끈끈하고 가장 강력한 팀이었던
                  ZOO의 아이덴티티의 위기를 겪었습니다. 저희의 목표는 각
                  대회에서 좋은 성적을 거두고 가장 중요한 여정인 고연전에서
                  연세대 볼케이노를 꺾으며 잠시 맞겨두었던 전국 1위의 영애를
                  되찾아오는 것 입니다. 저희가 농구에 전념하고 소중한 경험을 할
                  수 있도록 지원을 요청드립니다!
                </div>
                <div
                  className={
                    isMobile ? styles.contentsHead1M : styles.contentsHead1
                  }
                >
                  모금된 금액은 훈련비, 대회 참가비, 회식비, 보험비로 사용될
                  예정입니다.
                </div>
                <div
                  className={
                    isMobile ? styles.contentsTxtM : styles.contentsTxt
                  }
                >
                  많은 관심과 지원에 대한 보답으로 대회 입상에서 얻어지는 상금
                  및 상품을 활용해 팀의 후원에 대한 보상을 드리려고 합니다.
                  저희가 수령하는 대회 입상 상금은 모든 NFT 토큰 홀더에 대한
                  보상으로 사용될 예정입니다. 우리가 기억할 만한 순간을 함께
                  기념하고 간직할 수 있는 유니폼과 트레이닝 복 등의 형태로
                  제작하여 전달해드리도록 하겠습니다. 저희가 제공하는 기념품은
                  고려대학교 행사에 참여할 때 뽐낼 수 있는 유니크하고 예쁜
                  디자인으로 기획할 것을 약속드립니다. 저희를 응원하고 활용도
                  높은 유틸리티를 얻어가세요!
                </div>
                <div
                  className={
                    isMobile ? styles.contentsHead1M : styles.contentsHead1
                  }
                >
                  보상
                </div>
                <div
                  className={
                    isMobile ? styles.contentsTxtM : styles.contentsTxt
                  }
                >
                  50,000원 ~300,000원
                </div>
                <div
                  className={
                    isMobile ? styles.contentsTxtM : styles.contentsTxt
                  }
                >
                  SNS 계정에서 당신의 공헌에 대해 크게 감사드립니다! 후원 인증
                  NFT 발급 및 팀의 입상 결과에 따른 장비, 팀 셔츠 등 다양한 보상
                </div>
                <div
                  className={
                    isMobile ? styles.contentsTxtM : styles.contentsTxt
                  }
                >
                  500,000원
                </div>
                당신이 만약 회사나 조직이라면 팀 유니폼과 훈련복, 장비 등에
                스폰서로 모시고 브랜드 로고를 마킹합니다.
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
                  <div className={styles.nickname}>Emmeriet</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 9개 구매</div>
                    <div className={styles.sponPrice}>900,000원</div>
                  </div>
                </div>
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>Imper</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 2개 구매</div>
                    <div className={styles.sponPrice}>80,000원</div>
                  </div>
                </div>
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>Wendent</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 10개 구매</div>
                    <div className={styles.sponPrice}>720,000원</div>
                  </div>
                </div>
                <div
                  className={
                    isMobile ? styles.sponsorCardM : styles.sponsorCard
                  }
                >
                  <div className={styles.nickname}>Caluin</div>
                  <div className={styles.sponsorCardSubContainer}>
                    <div className={styles.nftsBuy}>NFT 3개 구매</div>
                    <div className={styles.sponPrice}>30,000원</div>
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
                  {Math.ceil(
                    (campaignData[0].temp_current_price /
                      campaignData[0].temp_max_price) *
                      100
                  )}
                  <span className={styles.achieveTxt2}>% 달성</span>
                </div>
                <div className={styles.totalPrice}>
                  {campaignData[0].temp_current_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
