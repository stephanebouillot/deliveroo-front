import React from "react";
import Categorie from "./Categorie";
import Panier from "./Panier";

const Menu = (props) => {
  return (
    <div className="menu">
      {props.categories
        ? props.categories.map((categorie) => (
            <Categorie categorie={categorie} addProduct={props.addProduct} />
          ))
        : ""}
    </div>
  );
};

export default Menu;
