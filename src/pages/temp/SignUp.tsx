import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div>
      <div className={styles.easySignUpContainer}>
        <div className={styles.easySignUpTitle}>Easy sign-up</div>
        <div className={styles.kakaoLogin}>Get started with Kakao</div>
        <div className={styles.naverLogin}>Get started with Naver</div>
        <div className={styles.googleLogin}>Get started with Google</div>
      </div>
      <hr></hr>
      <div className={styles.easyEmailSignUpContainer}>
        <div className={styles.easySignUpTitle}>Easy email sign-up</div>
        <div>email</div>
        <input />
        <div>name</div>
        <input />
        <div>Password</div>
        <input />
        <input />
        <div className={styles.agreeContainer}>
          <input type="checkbox" value="agree"></input>
          <span>Agree to all</span>
        </div>
        <div>completion</div>
        <div>
          Already have a Wadtz account?
          <Link to="../Signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
