import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Payment.module.css";
import NavBar from "../components/NavBar";

import step3img from "../assets/image/Group55.png";
import step2img from "../assets/image/Group56.png";
import step1img from "../assets/image/Group57.png";
import supabase from "../config/supabaseClient";

const Payment = () => {
  const params = useParams();
  console.log(params);
  const [step, setStep] = useState<number>(0); // default 0
  const [btnTxt, setBtnText] = useState<string>("다음 단계로");
  const [nftData, setNftData] = useState<any | []>();
  const [userId, setUserId] = useState<number>();

  const [buynum, setBuynum] = useState<number>(1);
  const [addSponPrice, setAddSponPrice] = useState<number>(0);
  const [isTokenPay, setTokenPay] = useState(false);

  const [metaaddress, setMetaAddress] = useState<any>("");

  const OnclickHandler = () => {
    setBtnText("결제하기");

    setStep((prev): number => prev + 1);
  };

  const OnclickHandlerToken = () => {
    if (step == 1) {
      setBtnText("홈으로");
    }
    setStep((prev): number => prev + 1);
  };

  const OnclickHandlerBank = async () => {
    if (step == 1) {
      setBtnText("홈으로");
    }
    setStep((prev): number => prev + 1);

    transaction();

    console.log(nftData[0].publisher);
    console.log(nftData[0].id);
    console.log(nftData[0].price);
    console.log(buynum);
    console.log(addSponPrice);
    console.log(userId);
  };

  const transaction = async () => {
    const { data, error } = await supabase.from("transaction").insert([
      {
        from: nftData[0].publisher,
        to: userId,
        nft_id: nftData[0].id,
        num: buynum,
        add_price: addSponPrice,
        confirm: false,
      },
    ]);
    console.log(data);

    if (error) {
      console.log(error);
    }
  };

  const getNftData = async () => {
    const { data, error } = await supabase
      .from("nft_detail")
      .select()
      .eq("id", params.id);
    console.log(data);

    if (data) {
      setNftData(data);
    }
    if (error) {
      console.log(error);
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
          return;
        }
      } else {
        alert("결제를 위해서는 메타마스크 로그인이 필요합니다!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    const { data, error } = await supabase
      .from("account")
      .select()
      .eq("metaaddress", "0xf7e34bfbad83e2a6ff72398e5b1daee8672a1368");
    console.log("0xf7e34bfbad83e2a6ff72398e5b1daee8672a1368");
    console.log("duxj", metaaddress);
    console.log("data", data);
    if (data) {
      setUserId(data[0].id);
    }
  };

  const tokenPayClickHandler = () => {
    console.log("token pay");
    setTokenPay(true);
  };

  const bankPayClickHandler = () => {
    console.log("bank pay");
    setTokenPay(false);
    getMetamask();
    getUserData();
  };

  useEffect(() => {
    getNftData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      {/*-------------step 0-----------------*/}
      {step == 0 && (
        <div className={styles.stepContainer}>
          <div className={styles.title}>후원 및 결제</div>
          <div className={styles.imgContianer}>
            <img className={styles.stepImg} src={step1img} alt="steps" />
            <div className={styles.txtContainer}>
              <div>NFT 선택</div>
              <div>결제 정보 확인</div>
              <div>결제 완료</div>
            </div>
          </div>
          {nftData && (
            <div className={styles.nftBox}>
              <img className={styles.img} src={nftData[0].img} alt="img" />
              <div className={styles.nftBoxTxtContainer}>
                <div className={styles.nftBoxTitle}>{nftData[0].title} </div>
                <div className={styles.nftBoxPrice}>
                  {nftData[0].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </div>
                <div className={styles.nftBoxNftNum}>
                  {nftData[0].total_num}개 발행{" "}
                </div>
                <div className={styles.nftBoxNftNum}>
                  {nftData[0].total_num - nftData[0].sold_num}개 남음{" "}
                </div>
                <div className={styles.btnContainer}>
                  <div className={styles.btnTxt}>수량</div>
                  <input
                    className={styles.nftNumInput}
                    type="number"
                    value={buynum}
                    placeholder="1"
                    min="1"
                    max={`${nftData[0].total_num - nftData[0].sold_num}`}
                    onChange={(e) => {
                      setBuynum(parseInt(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={styles.subTitle}>후원금 더하기 (선택)</div>
          <div className={styles.inputContainer}>
            <input
              type="number"
              className={styles.input}
              value={addSponPrice}
              placeholder="0"
              onChange={(e) => {
                setAddSponPrice(parseInt(e.target.value));
              }}
              min="0"
            />
            <span className={styles.subInputTxt}>원을 추가로 후원합니다.</span>
          </div>
        </div>
      )}
      {/*-------------step 1-----------------*/}
      {step == 1 && (
        <div className={styles.stepContainer}>
          <div className={styles.title}>후원 및 결제</div>
          <div className={styles.imgContianer}>
            <img className={styles.stepImg} src={step2img} alt="steps" />
            <div className={styles.txtContainer}>
              <div>NFT 선택</div>
              <div>결제 정보 확인</div>
              <div>결제 완료</div>
            </div>
          </div>

          <div className={styles.line}></div>
          <div className={styles.paymentInfoSubContainer}>
            <div className={styles.PItitle}>핸들볼 팀과 연습 경기 NFT</div>
            <div className={styles.PItxtContainer}>
              <div className={styles.PItxt1}>수량 {buynum}개</div>
              <div className={styles.PItxt1}>
                {(nftData[0].price * buynum)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </div>
            </div>
          </div>
          <div className={styles.paymentInfoSubContainer}>
            <div>추가 후원금</div>
            <div>
              {addSponPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.paymentInfoSubContainer}>
            <div className={styles.PItitle}>최종 결제 금액</div>
            <div>
              {(nftData[0].price * buynum + addSponPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </div>
          </div>
          <div className={styles.line}></div>

          <div className={styles.title2}>결제 방법</div>
          <div className={styles.paymentBtnContainer}>
            <div
              className={
                isTokenPay
                  ? styles.paymentTypebtnClicked
                  : styles.paymentTypebtn
              }
              onClick={tokenPayClickHandler}
            >
              토큰 결제
            </div>
            <div
              className={
                isTokenPay
                  ? styles.paymentTypebtn
                  : styles.paymentTypebtnClicked
              }
              onClick={bankPayClickHandler}
            >
              계좌 이체
            </div>
          </div>
          <div className={styles.guideTxt}>
            토큰 결제의 경우 메타마스크 지갑을 사용하여 결제가 가능합니다.
          </div>
          <div className={styles.guideTxt}>
            계좌이체의 경우 예금주 명을 확인하시고 아래 계좌로 48시간 내에
            입금해주시면 됩니다.
          </div>
          <div className={styles.accountNumContainer}>
            <div>계좌명: 스포낸스</div>
            <div>은행: 카카오뱅크</div>
            <div>계좌번호: 1002-255-184-583</div>
          </div>
        </div>
      )}
      {/*-------------step 2-----------------*/}
      {step == 2 && (
        <div className={styles.stepContainer}>
          <div className={styles.title}>후원 및 결제</div>
          <div className={styles.imgContianer}>
            <img className={styles.stepImg} src={step3img} alt="steps" />
            <div className={styles.txtContainer}>
              <div>NFT 선택</div>
              <div>결제 정보 확인</div>
              <div>결제 완료</div>
            </div>
          </div>

          <div className={styles.resultTxt}>결제가 완료되었습니다.</div>
          <div className={styles.subresultTxt}>
            계좌이체의 경우 아래 계좌를 확인해주시고, NFT는 임금 후 2영업일
            이내에 처리 됩니다.
          </div>
          <div className={styles.accountNumContainer}>
            <div>계좌명: 스포낸스</div>
            <div>은행: 카카오뱅크</div>
            <div>계좌번호: 1002-255-184-583</div>
          </div>
        </div>
      )}
      {step == 0 && (
        <button className={styles.nextBtn} onClick={OnclickHandler}>
          {btnTxt}
        </button>
      )}

      {step == 1 &&
        (isTokenPay ? (
          <button className={styles.nextBtn} onClick={OnclickHandlerToken}>
            {btnTxt}
          </button>
        ) : (
          <button className={styles.nextBtn} onClick={OnclickHandlerBank}>
            {btnTxt}
          </button>
        ))}
      {step == 2 && (
        <Link to="../../" className={styles.nextBtn}>
          {btnTxt}
        </Link>
      )}
    </div>
  );
};

export default Payment;
