import styles from "./SignIn.module.css";

const SignIn = () => {
  const registerClickHandler = () => {
    return null;
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.signInTxt}>Sign In</div>
      <input className={styles.input} />
      <div className={styles.infoTxt}>The email format is incorrect.</div>
      <input className={styles.input} />
      <div className={styles.forgotTxt}>Forgot your account information?</div>
      <div className={styles.signInBtn}>Sign In</div>
      <div className={styles.registerContainer}>
        <div className={styles.registerTxt}>
          Don't have a sponance account yet?{" "}
          <span
            className={styles.registerTxtLink}
            onClick={registerClickHandler}
          >
            Click here to register
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

//Email Address
//Password
//Forgot your information?
//Don't have a SPONACNE account yet? Click here to register
//The email format is incorrect.
