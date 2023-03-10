import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./SponsorRankCard.module.css";

export interface SponsorRankCard_Data {
  order: number;
  nickname: string;
  donateNum: number;
  totalDonate: number;
}

export const SponsorRankCard = ({
  order,
  nickname,
  donateNum,
  totalDonate,
}: SponsorRankCard_Data) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className={isMobile ? styles.mainContainerMobile : styles.mainContainer}
    >
      <div className={styles.subContainer}>
        <div className={styles.order}>{order + 1}</div>
        <div className={styles.nic}>{nickname}</div>
        <div className={styles.donateNum}>{donateNum}명 후원</div>
      </div>
      <div className={styles.totalDonate}>
        {totalDonate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </div>
    </div>
  );
};
