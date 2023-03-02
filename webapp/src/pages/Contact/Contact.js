import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Contact.css";
import Recommended from "../../components/Recommended/Recommended";

function Contact() {
  return (
    <div>
      <NavBar />
      
      <div class="container" style={{marginTop: "60px"}}>
        <div className="contact-box">
          <div className="left" />
          <div className="right">
            <h2>Contact Us</h2>
            <input type="text" className="field" placeholder="Your Name" />
            <input type="text" className="field" placeholder="Your Email" />
            <input type="text" className="field" placeholder="Phone" />
            <textarea
              placeholder="Message"
              className="field"
              defaultValue={""}
            />
            <button className="btn">Send</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;