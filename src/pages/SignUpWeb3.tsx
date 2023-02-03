import React from "react";
import { FC, useState } from "react";
import NavBar from "../components/NavBar";
import supabase from "../config/supabaseClient";
import styles from "./SignUpWeb3.module.css";
import logo from "../assets/image/logoWithTextBlack.png";
import checkIcon from "../assets/image/check-circle.png";
import checkCircle from "../assets/image/checkCircle.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SignUpWeb3: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [metaaddress, setMetaAddress] = useState<any>("");
  const [nickname, setNickname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [overlapNickname, setOverlapNickname] = useState<boolean>(true);
  const [overlapMetaAddress, setOverlapMetaAddress] = useState<boolean>(false);
  const [overlapEmail, setOverlapEmail] = useState<boolean>(false);
  const activestate: boolean = true;

  const [formError, setFormError] = useState<string | null>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    checkOverlap("email", email);

    if (!metaaddress) {
      setFormError("메타마스크 지갑 연동을 확인해주세요!");
      return;
    }

    if (!nickname || !lastname || !firstname || !sex || !email || !birth) {
      setFormError("정보를 모두 입력해 주세요!");
      return;
    }

    if (overlapNickname) {
      setFormError("아이디를 중복 확인해주세요!");
      return;
    }

    if (overlapMetaAddress) {
      setFormError(
        "메타마스크 지갑 주소가 이미 등록되어 있습니다. 로그인을 이용해 주세요."
      );
      return;
    }

    if (overlapEmail) {
      setFormError("이미 등록된 이메일입니다. 다시 입력해 주세요.");
      return;
    }

    const { data, error } = await supabase.from("account").insert([
      {
        nickname,
        lastname,
        firstname,
        email,
        sex,
        birth,
        metaaddress,
        activestate,
      },
    ]);
    {
      /* 아래 부분에서 data가 불러오기 전에 아래가 실행되버리면 그냥 넘어가기 떄문에, data를 받은 후 실행 되도록 수정해야함*/
    }
    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correcttly");
    } else {
      setShowSuccess(true);
    }

    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  const getMetamask = async () => {
    try {
      if (window.ethereum) {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (Array.isArray(account) && account.length !== 0) {
          setMetaAddress(account[0]);
          console.log("metamask Address ", account[0]);
          checkOverlap("metaaddress", account);
          return;
        }
      } else {
        if (isMobile) {
          alert(
            "회원가입을 위해 메타마스크 지갑이 필요합니다. 메타마스크 어플 웹으로 접속해주세요!"
          );
        } else {
          alert(
            "회원가입을 위해 메타마스크 지갑이 필요합니다. 크롬으로 접속해주세요!"
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkOverlap = async (column: string, target: any) => {
    const { data, error } = await supabase
      .from("account")
      .select()
      .eq(column, target);

    if (Array.isArray(data) && data.length !== 0) {
      console.log("중복된 데이터가 있습니다!");

      if (column === "nickname") {
        setOverlapNickname(true);
        alert("아이디가 중복 되었습니다! 다른 아이디를 사용해 주세요.");
      }

      if (column === "metaaddress") {
        setOverlapMetaAddress(true);
        alert("이미 등록된 지갑 주소입니다. 다른 주소를 사용해 주세요!");
      }

      if (column === "email") {
        setOverlapEmail(true);
        alert("이미 등록된 이메일 주소입니다. 다른 이메일을 사용해 주세요!");
      }
      return;
    }

    if (error) {
      console.log(error);
    }

    if (column === "nickname") {
      setOverlapNickname(false);
      setFormError(null);
    }

    if (column === "metaaddress") {
      setOverlapMetaAddress(false);
      setFormError(null);
    }

    if (column === "email") {
      setOverlapEmail(false);
      setFormError(null);
    }

    console.log("사용 가능합니다!");
    return;
  };

  const formBtnHandler = () => {};

  return (
    <div>
      <NavBar />
      {showSuccess && (
        <div className={styles.modalContainer}>
          <div className={styles.successModal}>
            <img className={styles.checkCircle} src={checkCircle} alt="check" />
            <div className={styles.sucessTxt}>회원가입이 완료되었습니다</div>
            <div className={styles.sucessTxt}>
              홈에서 로그인 후 이용해주세요
            </div>
            <Link to="../" className={styles.homeBtn}>
              홈으로
            </Link>
          </div>
        </div>
      )}
      <div className={isMobile ? styles.mainContainerM : styles.mainContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.connectWalletContainer}>
          {metaaddress === "" ? (
            <button className={styles.connectWallet} onClick={getMetamask}>
              <div className={styles.connectWalletTxt}>
                메타마스크 지갑 연동하기
              </div>
            </button>
          ) : (
            <div>
              <div className={styles.connectWalletClicked}>
                <img src={checkIcon} alt="check" className={styles.checkIcon} />
              </div>
              <div
                className={
                  isMobile ? styles.subContainerM : styles.subContainer
                }
              >
                <div className={styles.addressTxt}>
                  주소&nbsp;:&nbsp;
                  {metaaddress !== undefined ? (
                    <span>{metaaddress}</span>
                  ) : null}
                </div>
                {!isMobile && (
                  <button
                    className={styles.reconnectWallet}
                    onClick={getMetamask}
                  >
                    다시 불러오기
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="nickname" className={styles.labelTxt}>
              아이디
            </label>
            <div className={styles.idContainer}>
              <input
                type="text"
                id="nickname"
                value={nickname}
                className={styles.inputId}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  checkOverlap("nickname", nickname);
                }}
                className={styles.checkOverlapBtn}
              >
                중복 확인
              </button>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.labelTxt}>
              이메일
            </label>
            <input
              type="text"
              id="email"
              value={email}
              className={styles.input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="lastname" className={styles.labelTxt}>
              이름
            </label>
            <div className={styles.nameContainer}>
              <input
                type="text"
                id="lastname"
                value={lastname}
                className={styles.inputLastName}
                placeholder="성"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
              <input
                type="text"
                id="firstname"
                value={firstname}
                className={styles.inputFirstName}
                placeholder="이름"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="birth" className={styles.labelTxt}>
              생년월일{" "}
            </label>
            <input
              type="text"
              id="birth"
              value={birth}
              className={styles.input}
              placeholder="ex) 980701"
              onChange={(e) => {
                setBirth(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="sex" className={styles.labelTxt}>
              성별
            </label>
            <input
              type="text"
              id="sex"
              value={sex}
              className={styles.input}
              placeholder="ex) 남자, 여자"
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
          </div>

          <button className={styles.registerBtn}>가입하기</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpWeb3;
