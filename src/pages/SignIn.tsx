import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.signInTxt}>Sign In</div>
      <input className={styles.input} />
      <div className={styles.infoTxt}>The email format is incorrect.</div>
      <input className={styles.input} />
      <Link className={styles.forgotTxt} to="/FindAccount">
        Forgot your account information?
      </Link>
      <div className={styles.signInBtn}>Sign In</div>
      <div className={styles.registerContainer}>
        <div className={styles.registerTxt}>
          Don't have a sponance account yet?{" "}
          <Link className={styles.registerTxtLink} to="/signup">
            Click here to register
          </Link>
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
