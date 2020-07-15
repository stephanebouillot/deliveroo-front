import React, { useState } from "react";
import Plat from "./Plat";

const Categorie = (props) => {
  return (
    <div className="categorie">
      <h2>{props.categorie.name ? props.categorie.name : "Categorie"}</h2>
      <div className="cartes">
        {props.categorie.meals.map((detailplat) => (
          <Plat meal={detailplat} addProduct={props.addProduct} />
        ))}
      </div>
    </div>
  );
};

export default Categorie;
