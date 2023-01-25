import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import FAQ from "./pages/FAQ";
import FindAccount from "./pages/FindAccount";
// import Dataload from "./components/Dataload";
import Main from "./pages/Main";
import SignInWeb3 from "./pages/SignInWeb3";
import SignUpWeb3 from "./pages/SignUpWeb3";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <Dataload /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/signin" element={<SignInWeb3 />} />
          <Route path="/signup" element={<SignUpWeb3 />} />
          <Route path="/findaccount" element={<FindAccount />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
