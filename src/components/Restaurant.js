import React, { useState } from "react";

const Restaurant = (props) => {
  return (
    <div className="restaurant">
      <div className="namerestaurant">
        <h1>{props.restaurant ? props.restaurant.name : "Restaurant"}</h1>
        <p className="descriptionrestaurant">
          {props.restaurant ? props.restaurant.description : "description"}
        </p>
      </div>
      <img src={props.restaurant ? props.restaurant.picture : "image"}></img>
    </div>
  );
};

export default Restaurant;
