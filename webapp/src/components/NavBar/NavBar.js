import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
//images
import NovaLogo from "./assets/logo200.png";


function NavBar() {
  return (
    <>
      <header className="header">
        <div>
          <img
            src={NovaLogo}
            alt="Logo"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link >Upcomming</Link>
              <div className="menu-dropdown">
                <div>
                  <Link>Harishchandra</Link>
                </div>
                <div>
                  <Link>Kalasubai</Link>
                </div>
                <div>
                  <Link>Ratangad</Link>
                </div>
                <div>
                  <Link>Harihar</Link>
                </div>
                <div>
                  <Link>korigad</Link>
                </div>
              </div>
            </li>
            <li>
              <Link >Trekking</Link>
              <div className="menu-dropdown">
                <div>
                  <Link>Maharastra</Link>
                </div>
                <div>
                  <Link>Himachal</Link>
                </div>
                <div>
                  <Link>Karnatak</Link>
                </div>
                <div>
                  <Link>Uttarakhand</Link>
                </div>
                <div>
                  <Link>North-East</Link>
                </div>
              </div>
            </li>
            <li>
              <Link >Camping</Link>
              <div className="menu-dropdown">
                <div>
                  <Link>Pune</Link>
                </div>
                <div>
                  <Link>Mumbai</Link>
                </div>
                <div>
                  <Link>Banglore</Link>
                </div>
                <div>
                  <Link>Hyderabad</Link>
                </div>
                <div>
                  <Link>Delhi</Link>
                </div>
              </div>
            </li>
            <li>
              <Link >
                <pre>Road Trips</pre>
              </Link>
              <div className="menu-dropdown">
                <div>
                  <Link>Ladakh</Link>
                </div>
                <div>
                  <Link>Goa</Link>
                </div>
                <div>
                  <Link>Kanyakumari</Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>

            <li style={{ marginLeft: "30px" }}>
              <Link to="/feedback">Feedback</Link>
            </li>

            <li style={{ marginLeft: "30px" }}>
              <Link to="/booking">Booking</Link>
            </li>

            {/* <li style={{ marginLeft: "15px" }}>
              <Link to="/booking">Booking</Link>
            </li> */}
            
          </ul>
        </nav>

        <div className="auth-buttons">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Link to="/signup" >Sign Up</Link>
          </div>
          
        </div>
      </header>
    </>
  );
}

export default NavBar;
