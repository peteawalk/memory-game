import React from "react";
import "./style.css";

function CarCard(props) {
  return (
    <div className="card" onClick={() => props.selectCar(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CarCard;
