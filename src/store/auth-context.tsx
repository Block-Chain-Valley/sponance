import React, { useState, useEffect } from "react";

const DEFAULT_ADDRESS = "0x000000000000";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userAddress: DEFAULT_ADDRESS,
  onLogout: () => {},
  onLogin: (address: any) => {},
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAddress, setUserAddress] = useState<any>(DEFAULT_ADDRESS);

  useEffect(() => {
    loginCheck();
  }, []);

  const loginCheck = () => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
      setUserAddress(localStorage.getItem("address"));
    }
  };

  const logoutHandler = () => {
    console.log("logout!");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userAddress");
    setIsLoggedIn(false);
  };

  const loginHandler = (address: string) => {
    if (address === DEFAULT_ADDRESS) {
      console.log("login fail");
      return false;
    }
    console.log("login address :", address);
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("userAddress", address);
    setIsLoggedIn(true);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userAddress,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
