import React from "react";

const Plat = (props) => {
  return (
    <div className="card">
      <div className="detailsCarte">
        <div className="titlecard">{props.meal.title}</div>
        <div className="detailtitlecard">{props.meal.description}</div>
        <div className="bascard">
          <div className="price">
            {props.meal.price} <span>€</span>
          </div>

          <div className="populaire">
            {props.meal.popular ? <i class="fas fa-star">Popular</i> : ""}
          </div>
        </div>
      </div>
      {props.meal.picture ? (
        <img alt={props.meal.title} src={props.meal.picture} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Plat;
