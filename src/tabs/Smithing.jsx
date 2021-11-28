import React, { useState } from "react";

import "../App.css";
// import { styled } from "@mui/material/styles";
// import Slider from "./components/Slider";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
// import Dropdown from "./components/Dropdown";
import ToggleButtons from "../components/ToggleButtons";
import Boosts from "../components/Boosts";
import Footer from "../components/Footer";
import CustomSwitch from "../components/CustomSwitch";
import BoostCheckbox from "../components/Checkbox";
// import { CodeSharp } from "@mui/icons-material";

// Max bar input: 567.019.187
const Smithing = () => {
  // Person's current level
  const [currentLevel, setCurrentLevel] = useState(1);
  const updateCurrentLevel = (currentLevel) => {
    setCurrentLevel(currentLevel);
  };
  // Person's current level percentage
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const updateCurrentPercentage = (currentPercentage) => {
    currentPercentage = currentPercentage / 100;
    // console.log("update %", currentPercentage);
    setCurrentPercentage(currentPercentage);
  };
  // Person's target level
  const [targetLevel, setTargetLevel] = useState(1);
  const updateTargetLevel = (targetLevel) => {
    setTargetLevel(targetLevel);
  };
  // Person's target material
  const [material, setMaterial] = useState([
    "material",
    { name: "material", submaterials: {} },
  ]);
  const updateMaterial = (material) => {
    setMaterial(material);
  };

  // Smithing data
  const [artisanData, setArtisanData] = useState({});

  // Exp boosts
  const [boostsDidUpdate, setBoostDidUpdate] = useState(false);
  const [boosts, setBoosts] = useState([
    { name: "World Boost", value: 1.5, active: false },
    { name: "Infernal Ring", value: 1.04, active: false },
    { name: "Infernal Hammer", value: 1.04, active: false },
  ]);
  const updateBoosts = (boosts) => {
    // const tempBoosts = moment(boosts);
    setBoosts(boosts);
    // this.forceUpdate();
    setBoostDidUpdate(!boostsDidUpdate);
    // console.log("Boosts update", updatedBoostName);
  };
  // Apply Boosts on bar smelting control
  const [applyBoostOnSmelt, setApplyBoostOnSmelt] = useState(false);
  const updateApplyBoostOnSmelt = (applyBoostOnSmelt) => {
    // console.log(applyBoostOnSmelt);
    setApplyBoostOnSmelt(applyBoostOnSmelt);
  };
  // Smelt or buy bars control
  const [buyOrSmeltBars, setBuyOrSmeltBars] = useState(false);
  const updateBuyOrSmeltBars = (buyOrSmeltBars) => {
    // console.log(buyOrSmeltBars);
    // console.log(buyOrSmeltBars);
    setBuyOrSmeltBars(buyOrSmeltBars);
  };

  React.useEffect(() => {
    // fetch("http://localhost:8000/artisan")
    fetch("https://coa-calculator-backend.herokuapp.com/artisan")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        // setBusy(false);
        setArtisanData(data);
        // console.log("set busy");
      })
      .catch((error) => {
        console.log("Error on fetch Artisan Skills data:", error);
      });
  }, []);

  return (
    <>
      <Attribute
        maxValue={120}
        attributeName={"Your Smithing Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={120}
        attributeName={"Target Smithing Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ToggleButtons
        updateMaterial={updateMaterial}
        skillsData={artisanData}
        skill="Smithing"
        currentLevel={currentLevel}
      />
      <CustomSwitch
        value={buyOrSmeltBars}
        updateValue={updateBuyOrSmeltBars}
        falseText="Smelt Bars"
        trueText="Buy Bars"
      />
      <BoostCheckbox
        applyBoostOnSmelt={applyBoostOnSmelt}
        updateApplyBoostOnSmelt={updateApplyBoostOnSmelt}
      />
      <Boosts boosts={boosts} updateBoosts={updateBoosts} />
      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        material={material}
        keywords={["Bars"]}
        boosts={boosts}
        applyBoostOnSmelt={applyBoostOnSmelt}
        buyOrSmeltBars={buyOrSmeltBars}
        skill="Smithing"
        boostsDidUpdate={boostsDidUpdate}
      />
      {/* <Slider sliderName={"Your Smithing XP"}/>
      <Slider sliderName={"Ore 1"}/>
      <Slider sliderName={"Ore 2"}/> */}
      <Footer />
    </>
  );
};

export default Smithing;
