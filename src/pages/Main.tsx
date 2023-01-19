import React, { useState } from "react";
import PersonCard from "../components/PersonCard";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.banner}></div>
      <div className={styles.cardContainer}>
        <PersonCard />
      </div>
    </div>
  );
};

export default Main;
