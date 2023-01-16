import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import FAQ from "./pages/FAQ";
// import Dataload from "./components/Dataload";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        {/* <Dataload /> */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/campaign" element={<Campaign />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
