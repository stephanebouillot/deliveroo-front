import React from "react";
import Categorie from "./Categorie";

const Menu = (props) => {
  return (
    <div className="menu">
      {props.categories
        ? props.categories.map((categorie) => (
            <Categorie categorie={categorie} />
          ))
        : ""}
    </div>
  );
};

export default Menu;
