import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";

import "./App.css";

import axios from "axios";

const apiURL = process.env.API_URL || "http://localhost:3200";

function App() {
  const [data, setData] = useState({});

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

        <Menu categories={data.categories} />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
