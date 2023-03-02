import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// images
import Destination11 from "./assets/Destination11.png";
import Destination12 from "./assets/Destination12.png";
import Destination13 from "./assets/Destination13.png";
import Destination14 from "./assets/Destination14.png";
import Destination15 from "./assets/Destination15.png";
import Destination16 from "./assets/Destination16.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";
// styles
import "./Campings.css"


const data = [
  {
    image: Destination11,
    title: "Matheran Camping",
    subTitle:
      "Matheran is one of the smallest hill station in Indian. Matheran is famous for Horse Riding, Herping, Bird Watching, Handicrafts.",
    cost: "1799/- per person",
    duration: "2 Days / 1 Night",
    distance: "Mumbai: 85km & Pune:120km",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination12,
    title: "Igatpuri Water Sports & Camping",
    subTitle: "Igatpuri is the city in the Nashik district of Maharashtra. This place is super beautiful because of its surrounding breathtaking green mountains.",
    cost: "1400/- per person",
    duration: " 2 Days / 1 Nigh",
    distance: "Mumbai: 125km & Pune: 230km",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination13,
    title: "Pawna Lakeside Camping ",
    subTitle: "Pawna lake, also known as Pavana lake, is located in Maval taluka of Pune district in Maharashtra",
    cost: "1200/- per person",
    duration: " 2 Days / 1 Night",
    distance: "Mumbai: 120km & Pune: 65km",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination14,
    title: "Kolad Camping with Rafting & Adventure sports ",
    subTitle: "In the backdrop of Sahyadri, there is a flourishing village, Kolad, in the Raigad district of Maharashtra.",
    cost: "1300/- per person",
    duration: "2 Days / 1 Night",
    distance: "Mumbai 120km & Pune: 120km",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination15,
    title: "Kasarsai Dam Camping",
    subTitle: "The Kasarsai dam is a small dam built on a Kasarsai lake just near Pune.",
    cost: "1200Rs per person",
    duration: "1 Night 2 Days",
    distance: "Mumbai: 130km & Pune: 25km",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination16,
    title: "Alibaug Beach Camping",
    subTitle: "Soothe your soul and mind with the amazing views of the sunset over the sea when you go for a camping experience in Alibaug.",
    cost: "1400",
    duration: "1 Night 2 Day",
    distance: "Mumabi: 110km & Pune: 150km",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  }

];

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

function Campings() {

  const navigate = useNavigate()
  const navigateToDetailPage = (data) => {
    navigate("campdetail", { state: data })
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Campings Destinations</h2>
      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination" onClick={() => navigateToDetailPage(destination)}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.distance + " KMS"}</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Campings;
