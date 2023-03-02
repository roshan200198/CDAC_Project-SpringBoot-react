import React, { useState } from "react";
// images
import Destination1 from "./assets/Destination1.png";
import Destination2 from "./assets/Destination2.png";
import Destination3 from "./assets/Destination3.png";
import Destination4 from "./assets/Destination4.png";
import Destination5 from "./assets/Destination5.png";
import Destination6 from "./assets/Destination6.png";
import Destination7 from "./assets/Destination7.png";
import Destination8 from "./assets/Destination8.png";
import Destination9 from "./assets/Destination9.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";
// styles
import "./Recommended.css"


const data = [
  {
    image: Destination1,
    title: "Harishchandragad Trek",
    subTitle:
      "Harishchandra, A famous ancient fort in the district of Ahmednagar is a perfect place for you to visit for a weekend getaway",
    cost: "Pune:1450/- & Mumbai:1300/-" ,
    duration: "1 night 1 day",
    distance: "Pune:166 km & Mumbai:243 km"
  },
  {
    image: Destination2,
    title: "Lohgad Trek",
    subTitle: "Lohagad,is one of the many hill forts of Maharashtra state in India. Situated close to the hill station Lonavala and 52 km northwest of Pune, Lohagad rises to an elevation of 1,033 m above sea level.",
    cost: "Pune:1000/- & Mumbai:1400/-",
    duration: "1 day",
    distance: "Pune:65 km & Mumbai:94 km"
  },
  {
    image: Destination3,
    title: "Kalsubai Trek",
    subTitle: "Kalsubai,Located in the western ghats of the Sahyadri region and also known as the Everest of Maharashtra, is this beautiful place for you to visit.",
    cost: "Pune:1450/- & Mumbai:1400/-",
    duration: "1 Night 1 Day",
    distance: "Pune:169 km & Mumbai:153 km"
  },
  {
    image: Destination4,
    title: "Dudhsagar Waterfall Trek",
    subTitle: "You can't really miss a trip to one of the largest and most beautiful waterfalls in India.Dudhsagar waterfalls, as the name suggests, is the sea of milk.",
    cost: "Pune:2200/- & Mumbai:2700/-",
    duration: "2 Night 3 Day",
    distance: "Pune:360 km & Mumbai:640 km"
  },
  {
    image: Destination5,
    title: "Devkund Waterfall Trek",
    subTitle: "The Devkund Waterfall trek,It is nature’s hidden gem, found in the middle of a dense forest, also named Devkund.",
    cost: "Pune:1300/- & Mumbai:1500/-",
    duration: "1 Night 1 Day",
    distance: "Pune:100 km & Mumbai:130 km"
  },
  {
    image: Destination6,
    title: "Harihar Fort Trek",
    subTitle: "The Harihar fort, also known as Harshagad, is located in the Nashik district of Maharashtra.",
    cost: "Pune:1400/- & Mumbai:1100/-",
    duration: "1 Night 1 Day",
    distance: "Pune:247 km & Mumbai:190 km"
  },
  {
    image: Destination7,
    title: "Visapur Fort Trek",
    subTitle: "Visapur Fort Trek is one of the most thrilling day treks that passes from different villages, trails, and a stunning waterfall.",
    cost: "Pune:700/- & Mumbai:1400/-",
    duration: "1 Day",
    distance: "Pune:60 km & Mumbai:103 km"
  },
  {
    image: Destination8,
    title: "Andharban Trek",
    subTitle: "Andharban, as the name suggests simply means a ‘Dark Dense Forest’. During monsoons, this trek is one of the most refreshing treks of the Sahyadri.",
    cost: "Pune:1400/- & Mumbai:1600/-",
    duration: "1 Night 1 Day",
    distance: "Pune:67 km & Mumbai:133 km"
  },
  {
    image: Destination9,
    title: "Aadrai Trek",
    subTitle: "Deep in the belly of Sahyadri, lies this beautiful and unexplored Aadrai Jungle where the forest floor seldom feels the warm embrace of the sun.",
    cost: "Pune:1400/- & Mumbai:1400/-",
    duration: "1 Night 1 Day",
    distance: "Pune:129 km & Mumbai:138 km"
  }
];

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

function Recommended() {

  const [active, setActive] = useState(1);

  return (
    <section className="section">
      <div className="title">
        <h2>Recommended Destinations</h2>
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
            <div className="destination">
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

export default Recommended;
