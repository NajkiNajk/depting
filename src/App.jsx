import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
import Grid from "./components/Grid/Grid";

const App = () => {
  const filterOptions = [
    "all",
    "finTech",
    "eCommerce",
    "technology",
    "culture",
    "food",
    "travel",
    "innovation",
  ];
  const [filter, setFilter] = useState("all");
  const [showDropDown, setShowDropDown] = useState(false);

  const onOptionClick = (option) => {
    console.log("option: ", option);
    setFilter(option);
    setShowDropDown(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="categorySelector">
        <span className="categorySelector-gray">Show me</span>
        <div className="categorySelector-black">all work</div>
        <div className="categorySelector-select"></div>
        <span className="categorySelector-gray">in</span>
        <div className="categorySelector-black">all industries</div>
        <div
          className="categorySelector-select"
          onClick={() => setShowDropDown(true)}
        ></div>
      </div>
      {showDropDown &&
        filterOptions.map((option, index) => (
          <div
            className="filterOption"
            key={index}
            onClick={() => onOptionClick(option)}
          >
            {option}
          </div>
        ))}
      <Grid filter={filter} />
      <Clients />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
