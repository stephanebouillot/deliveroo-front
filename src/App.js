import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";

import "./App.css";

import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200");
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
