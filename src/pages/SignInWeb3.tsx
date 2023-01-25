import React, { FC, useEffect, useState } from "react";

const App: FC = () => {
  const [account, setAccount] = useState<string | unknown>("");

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts);
        console.log("address: ", accounts);
      } else {
        alert("크롬으로 접속해주세요! 메타마스크 지갑이 필요합니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const test = () => {
    console.log(account);
  };

  const signout = () => {
    setAccount("");
    console.log("signout clicked");
  };

  useEffect(() => {
    // getAccount(); // getAccount 한번만 실행
  }, []);

  return (
    <div>
      <div>로그인</div>

      {account === "" ? (
        <div onClick={getAccount}> 지갑 로그인 </div>
      ) : (
        <div onClick={signout}> 지갑 로그아웃 </div>
      )}
      <div onClick={getAccount}>주소 다시 불러오기</div>
      <div onClick={test}>정보 불러오기 </div>
    </div>
  );
};

export default App;
