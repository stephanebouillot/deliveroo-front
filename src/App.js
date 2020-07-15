import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import Panier from "./components/Panier";

import "./App.css";

import axios from "axios";

// const apiURL = "https://deliveroo-stephane.herokuapp.com/";
const apiURL = "http://localhost:3200/";

function App() {
  const [data, setData] = useState({});
  const [panier, setPanier] = useState([]);

  const addProduct = (product) => {
    const newPanier = [...panier];

    let isFound = false;

    for (let i = 0; i < newPanier.length; i++) {
      if (newPanier[i].id === product.id) {
        newPanier[i].quantity += 1;
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      product.quantity = 1;
      newPanier.push(product);
    }

    setPanier(newPanier);
  };

  const removeProduct = (product) => {
    const newPanier = [...panier];

    for (let i = 0; i < newPanier.length; i++) {
      if (newPanier[i].id === product.id) {
        newPanier[i].quantity -= 1;
        if (newPanier[i].quantity === 0) {
          newPanier.splice(i, 1);
        }
        break;
      }
    }

    setPanier(newPanier);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      setData(response.data);
    } catch (err) {
      console.error("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <main className="main">
        <Restaurant restaurant={data.restaurant} />
        <div className="menu-panier">
          <Menu categories={data.categories} addProduct={addProduct} />
          <Panier
            panier={panier}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
