import React from "react";
import { FC, useState } from "react";
import NavBar from "../components/NavBar";
import supabase from "../config/supabaseClient";
import styles from "./SignUpWeb3.module.css";

const SignUpWeb3: FC = () => {
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

    console.log(
      nickname,
      lastname,
      firstname,
      email,
      sex,
      birth,
      metaaddress[0]
    );

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
        alert(
          "회원가입을 위해 메타마스크 지갑이 필요합니다. 크롬으로 접속해주세요!"
        );
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
      }

      if (column === "metaaddress") {
        setOverlapMetaAddress(true);
      }

      if (column === "email") {
        setOverlapEmail(true);
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

  return (
    <div>
      <NavBar />
      <div className={styles.mainContainer}>
        {metaaddress === "" ? (
          <button className={styles.connectWallet} onClick={getMetamask}>
            메타마스크 지갑 연동하기
          </button>
        ) : (
          <div className={styles.connectWallet}>
            지갑 연동이 확인되었습니다. 연결된 지갑 주소:
            {metaaddress !== undefined ? <span>{metaaddress}</span> : null}
            <button className={styles.reconnectWallet} onClick={getMetamask}>
              지갑 정보 다시 불러오기
            </button>
          </div>
        )}

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="nickname">아이디 :</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <div
              onClick={() => {
                checkOverlap("nickname", nickname);
              }}
            >
              중복 확인
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email">이메일 :</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="lastname">성 :</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="fristname">이름 :{"\t\t"}</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="sex">성별 :</label>
            <input
              type="text"
              id="sex"
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="birth">생년월일 </label>
            <input
              type="text"
              id="birth"
              value={birth}
              onChange={(e) => {
                setBirth(e.target.value);
              }}
            />
          </div>

          <button>회원가입</button>
          {formError && <p className={styles.error}>{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpWeb3;
