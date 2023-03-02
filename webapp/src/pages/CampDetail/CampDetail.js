import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./CampDetail.css";
// images

function CampDetail(props) {
  const location = useLocation();
  const destination = location.state;
  return (
    <div className="camp-detail-page">
      <NavBar />
      <header className="camp-detail">
        <img src={destination.image} />
        <div className="enquiry-card">
          <button>Enquire Now</button>
          <p className="price">{destination.cost} / Person</p>
          <div className="info">
            <i className="fas fa-heart"></i>
            <p>Instant Confirmation</p>
          </div>
          <div className="info">
            <i className="fas fa-heart"></i>
            <p>Best Price Guaranteed</p>
          </div>
          <div className="info">
            <i className="fas fa-heart"></i>
            <p>1000+ Happy Customers</p>
          </div>
        </div>
        <h1 className="destination-name">{destination.title}</h1>
      </header>
      {/* Put your content here */}
      <div className="content">
        <h1>Overview</h1>
        <p>{destination.info}</p>
        <h1>Trek Details</h1>
        <p>
          <ul>
            {Object.keys(destination.trek_details).map((trek) => {
              return (
                <li className="trek-list">
                  <span className="trek-detail-key">{trek}</span>
                  <span> : {destination.trek_details[trek]}</span>
                </li>
              );
            })}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default CampDetail;
