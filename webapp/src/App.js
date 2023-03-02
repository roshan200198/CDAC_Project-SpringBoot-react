import React from "react";
import { Route, Routes } from "react-router-dom";
import CampDetail from "./pages/CampDetail/CampDetail";
import Contactjsx from "./pages/Contact/Contactjsx";
import Home from "./pages/Home/Home";
import Login from "./pages/Signup/Login";
import Signupjsx from "./pages/Signup/Signupjsx";
//import Loginjsx from "./pages/Signup/Loginjsx";
import Feedbackjsx from "./pages/Feedback/Feedbackjsx";
import Bookingjsx from "./pages/Booking/Bookingjsx";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contactjsx />} />
      <Route path="/campdetail" element={<CampDetail />} />
      {/* <Route path="/Login" element={<Login />} /> */}
      <Route path="/signup" element={<Signupjsx />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feedback" element={<Feedbackjsx />} />
      <Route path="/booking" element={<Bookingjsx />} />
    </Routes>
    </>
  );
}

export default App;
