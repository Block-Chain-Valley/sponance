import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styles from "./FeatureNFTCard.module.css";

export interface propsType {
  imgURL: string;
  item: string;
  player: string;
  cardTitle: string;
  nftPrice: number;
  remainNFT: number;
  campaign_id: number;
}

const FeatureNFTCard = ({
  imgURL,
  item,
  player,
  cardTitle,
  nftPrice,
  remainNFT,
  campaign_id,
}: propsType) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Link
      to={`/campaign/${campaign_id}`}
      className={isMobile ? styles.mainContainerMobile : styles.mainContainer}
    >
      <img src={imgURL} className={styles.featureImg} />
      <div className={styles.cardTitle}>{cardTitle}</div>
      <div className={styles.itemAndPlayer}>
        {item}&nbsp;|&nbsp;{player}
      </div>
      <div className={styles.subContainer}>
        <div className={styles.nftPrice}>
          {nftPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
        <div className={styles.remainNFT}>
          {remainNFT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개 남음
        </div>
      </div>
    </Link>
  );
};

export default FeatureNFTCard;
