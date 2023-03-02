import React from "react";
import './Card.css'

const Card = (props) => {
  return (
    <div>
      <h1 className="name">{props.name}</h1>
    </div>
  );
}

export default Card
