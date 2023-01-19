import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import FAQ from "./pages/FAQ";
import FindAccount from "./pages/FindAccount";
import Dataload from "./components/Dataload";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Dataload />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/findaccount" element={<FindAccount />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
