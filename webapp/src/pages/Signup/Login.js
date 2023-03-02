import React from "react";
//import { ReactDOM } from "react";
import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.css";
import { Link } from "react-router-dom";
import profile from "./assets/Nova.png";
import user from "./assets/user.png";
import lock from "./assets/lock.png";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 className="cool">Login Page</h1>
              <div>
                <img src={user} alt="email" className="email" />
                <input type="text" placeholder="Enter Email-ID" className="name" />
              </div>
              <div className="second-input">
                <img src={lock} alt="email" className="email" />
                <input type="text" placeholder="Password" className="name" />
              </div>
              <div className="login-button">
                <button type="submit" 
                // onClick={this.saveFeedback} 
                >login</button>
              </div>
              <p className="link">
              {/* <a href="#"> Forgot password ?</a> or <a href="#"> Sign up</a> */}
                <Link to="/forgetpassword">forget Password?</Link><br/> Don't have account?<Link to="/signup"> Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
