import React from "react";
import { Link } from "react-router-dom";
import styles from "./NFTRankCard.module.css";

export interface NFTRankCard_Data {
  order: number;
  imgURL: string;
  item: string;
  player: string;
  cardTitle: string;
  nftPrice: number;
  remainNFT: number;
}

export const NFTRankCard = ({
  order,
  imgURL,
  item,
  player,
  cardTitle,
  nftPrice,
  remainNFT,
}: NFTRankCard_Data) => {
  return (
    <Link to={`/campaign/${0}`} className={styles.mainContainer}>
      <div className={styles.order}>{order + 1}</div>
      <div>
        <div className={styles.cardTitle}>{cardTitle}</div>
        <div className={styles.ItemAndPlayer}>
          {item}&nbsp;|&nbsp;{player}
        </div>

        <div className={styles.subContainer}>
          <div className={styles.nftPirce}>
            {nftPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </div>
          <div className={styles.remainNFT}>
            {remainNFT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개 남음
          </div>
        </div>
      </div>
      <img className={styles.img} src={imgURL} alt="nftimg"></img>
    </Link>
  );
};
