import React from "react";
import { signInWithGoogle } from "../firebase/firebase";
import "./Footer.css"

function Footer() {
  return (

    <footer className="footer">

      
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#shop">shop</a>
          <a href="#packages">packages</a>
          <a href="#reviews">reviews</a>
          <a href="#blogs">blogs</a>
        </div>
        <div className="box">
          <h3>extra links</h3>
          <a href="#" onClick={signInWithGoogle}>my account</a>
          <a href="#">my order</a>
          <a href="#">my wishlist</a>
          <a href="#">ask questions</a>
          <a href="#">terms of use</a>
          <a href="#">privacy policy</a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone" /> +918087138601{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone" /> +919922298877{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope" /> novaturientteam@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map" /> Pune, india - 411014{" "}
          </a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            {" "}
            <i className="fab fa-facebook-f" /> facebook{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter" /> twitter{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-instagram" /> instagram{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-linkedin" /> linkedin{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-github" /> github{" "}
          </a>
        </div>
      </div>
      <div className="credit">
        created by <span>Novaturient Team</span> | CDAC Jindabad!
      </div>
      
    </footer>

  );
}

export default Footer;
