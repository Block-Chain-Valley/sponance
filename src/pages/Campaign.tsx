import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./Campaign.module.css";

import s2 from "../assets/image/s2.png";
import s3 from "../assets/image/s3.png";
import hockey from "../assets/image/hockey.jpg";
import PersonCard from "../components/PersonCard";
import Footer from "../components/Footer";
import supabase from "../config/supabaseClient";
import { useMediaQuery } from "react-responsive";

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

interface FilterProps {
  name: string;
  id: string;
}

const Campaign = () => {
  const [campaignData, setCampaignData] = useState<any | []>();
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [itemFilter, setItemFilter] = useState<string>("");

  const filters: FilterProps[] = [
    { name: "축구", id: "1" },
    { name: "농구", id: "2" },
    { name: "하키", id: "3" },
    { name: "스케이트", id: "4" },
    { name: "핸드볼", id: "5" },
  ];

  const handleClick = (filterName: string, filterId: string) => {
    setSelectedFilter(selectedFilter === filterId ? null : filterId);

    if (selectedFilter === filterId) {
      // 이미 선택 되어 있는 필터를 눌렀을때
      setItemFilter("");
    } else {
      // 새로 눌렀을때
      setItemFilter(filterName);
    }
  };

  const getData = async () => {
    if (itemFilter == "") {
      const { data, error } = await supabase.from("campaign").select();

      console.log(data);
      if (data) {
        setCampaignData(data);
      }
    } else {
      const { data, error } = await supabase
        .from("campaign")
        .select()
        .eq("item", itemFilter);

      console.log(data);
      if (data) {
        setCampaignData(data);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [itemFilter]);

  return (
    <div className={isMobile ? styles.mainContainerM : styles.mainContainer}>
      <NavBar />
      {!isMobile && (
        <div className={styles.banner}>
          <img src={hockey} alt="banner" className={styles.bannerImg} />
          <div className={styles.blur} />
          <div className={styles.bannerTxt}>
            <span className={styles.colorBar}>|</span>하키 유소년의 동계올림픽
            진출을 응원해주세요
          </div>
        </div>
      )}
      <div
        className={
          isMobile ? styles.fillterContainerM : styles.fillterContainer
        }
      >
        <div className={isMobile ? styles.subContainerM : styles.subContainer}>
          <div className={styles.title}>전체</div>
          <div className={styles.sportFillterContainer}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`${styles.sportFillterTxt} ${
                  selectedFilter === filter.id ? styles.active : ""
                }`}
                onClick={() => handleClick(filter.name, filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className={
            isMobile
              ? styles.basicFillterContainerM
              : styles.basicFillterContainer
          }
        >
          <div
            className={
              isMobile ? styles.basicFillterTxtM : styles.basicFillterTxt
            }
          >
            인기순
          </div>
          <div
            className={
              isMobile ? styles.basicFillterTxtM : styles.basicFillterTxt
            }
          >
            최신순
          </div>
          <div
            className={
              isMobile ? styles.basicFillterTxtM : styles.basicFillterTxt
            }
          >
            후원금순
          </div>
          <div
            className={
              isMobile ? styles.basicFillterTxtM : styles.basicFillterTxt
            }
          >
            후원 참여자순
          </div>
        </div>
      </div>

      <div className={isMobile ? styles.cardContainerM : styles.cardContainer}>
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
              <div className={styles.cardBox} key={id}>
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
                  remainNFT={136}
                />
              </div>
            )
          )}
      </div>

      {!isMobile && <Footer />}
    </div>
  );
};

export default Campaign;
