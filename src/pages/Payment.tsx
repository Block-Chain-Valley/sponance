import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Payment.module.css";
import NavBar from "../components/NavBar";

import step3img from "../assets/image/Group55.png";
import step2img from "../assets/image/Group56.png";
import step1img from "../assets/image/Group57.png";
import s3 from "../assets/image/s3.png";

const Payment = () => {
  const [step, setStep] = useState<number>(0); // default 0
  const [btnTxt, setBtnText] = useState<string>("다음 단계로");

  const OnclickHandler = () => {
    if (step == 1) {
      setBtnText("홈으로");
    }
    setStep((prev): number => prev + 1);
  };

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
          <div className={styles.nftBox}>
            <img className={styles.img} src={s3} alt="img" />
            <div className={styles.nftBoxTxtContainer}>
              <div className={styles.nftBoxTitle}>핸드볼 팀과 연습 경기 </div>
              <div className={styles.nftBoxPrice}>100,000원 </div>
              <div className={styles.nftBoxNftNum}>100개 발행 </div>
              <div className={styles.nftBoxNftNum}>2개 남음 </div>
              <div className={styles.btnContainer}>
                <div className={styles.btnTxt}>수량</div>
                <input
                  className={styles.nftNumInput}
                  type="number"
                  placeholder="1"
                />
              </div>
            </div>
          </div>
          <div className={styles.subTitle}>후원금 더하기 (선택)</div>
          <div className={styles.inputContainer}>
            <input type="number" className={styles.input} placeholder="0" />
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
              <div className={styles.PItxt1}>수량 1개</div>
              <div className={styles.PItxt1}>100,000원</div>
            </div>
          </div>
          <div className={styles.paymentInfoSubContainer}>
            <div>추가 후원금</div>
            <div>0원</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.paymentInfoSubContainer}>
            <div className={styles.PItitle}>최종 결제 금액</div>
            <div>100,000원</div>
          </div>
          <div className={styles.line}></div>

          <div className={styles.title2}>결제 방법</div>
          <div className={styles.paymentBtnContainer}>
            <button className={styles.paymentTypebtn}>토큰 결제</button>
            <button className={styles.paymentTypebtn}>계좌 이체</button>
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

      {step < 2 && (
        <button className={styles.nextBtn} onClick={OnclickHandler}>
          {btnTxt}
        </button>
      )}
      {step == 2 && (
        <Link to="../../" className={styles.nextBtn}>
          {btnTxt}
        </Link>
      )}
    </div>
  );
};

export default Payment;
