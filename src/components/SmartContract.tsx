import React, { useState } from "react";
import NFT from "../pages/contracts/NFT.json";

const SmartContract = () => {
  const [metaAddress, setMetaAddress] = useState<any>(null);

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

  return (
    <div>
      <br />
      <br />
      <button onClick={getMetamask}> 지갑 정보 불러오기</button>
      <br />
      <br />
      {/* <button onClick={NftTransaction}> NFT 거래</button> */}
      <br />
      <br />
      {/* <button onClick={runTransaction}> alchemy transction</button> */}

      {metaAddress && <div>지갑주소 : {metaAddress}</div>}
    </div>
  );
};

export default SmartContract;
