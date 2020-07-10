import React from "react";

const Restaurant = (props) => {
  return (
    <div className="restaurant">
      <div className="namerestaurant">
        <h1>{props.restaurant ? props.restaurant.name : "Restaurant"}</h1>
        <p className="descriptionrestaurant">
          {props.restaurant ? props.restaurant.description : "description"}
        </p>
      </div>
      {props.restaurant ? (
        <img alt={props.restaurant.name} src={props.restaurant.picture}></img>
      ) : (
        ""
      )}
    </div>
  );
};

export default Restaurant;
