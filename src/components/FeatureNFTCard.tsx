import React from "react";
import styles from "./FeatureNFTCard.module.css";

export interface propsType {
  imgURL: string;
  item: string;
  player: string;
  cardTitle: string;
  nftPrice: number;
  remainNFT: number;
}

const FeatureNFTCard = ({
  imgURL,
  item,
  player,
  cardTitle,
  nftPrice,
  remainNFT,
}: propsType) => {
  return (
    <div className={styles.mainContainer}>
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
    </div>
  );
};

export default FeatureNFTCard;