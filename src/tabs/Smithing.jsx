import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import ToggleButtons from "../components/ToggleButtons";
import Boosts from "../components/Boosts";
import Footer from "../components/Footer";
import CustomSwitch from "../components/CustomSwitch";
import BoostCheckbox from "../components/Checkbox";

import artisanData from "../data/artisan_data.json";

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
    setCurrentPercentage(currentPercentage);
  };
  // Person's target level
  const [targetLevel, setTargetLevel] = useState(1);
  const updateTargetLevel = (targetLevel) => {
    setTargetLevel(targetLevel);
  };
  // Person's target element
  const [element, setElement] = useState(['loading']);
  const updateElement = (element) => {
    setElement(element);
  };

  // Exp boosts
  const [boostsDidUpdate, setBoostDidUpdate] = useState(false);
  const [boosts, setBoosts] = useState([
    { name: "World Boost", value: 1.5, active: false },
    { name: "Infernal Ring", value: 1.04, active: false },
    { name: "Infernal Hammer", value: 1.04, active: false },
  ]);
  const updateBoosts = (boosts) => {
    setBoosts(boosts);
    setBoostDidUpdate(!boostsDidUpdate);
  };
  // Apply Boosts on bar smelting control
  const [applyBoostOnSmelt, setApplyBoostOnSmelt] = useState(false);
  const updateApplyBoostOnSmelt = (applyBoostOnSmelt) => {
    setApplyBoostOnSmelt(applyBoostOnSmelt);
  };
  // Smelt or buy bars control
  const [buyOrSmeltBars, setBuyOrSmeltBars] = useState(true);
  const updateBuyOrSmeltBars = (buyOrSmeltBars) => {
    setBuyOrSmeltBars(buyOrSmeltBars);
  };

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
        updateElement={updateElement}
        skillsData={artisanData}
        skill="Smithing"
        currentLevel={currentLevel}
      />
      <CustomSwitch
        value={buyOrSmeltBars}
        updateValue={updateBuyOrSmeltBars}
        trueText="Smelt Bars"
        falseText="Buy Bars"
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
        element={element}
        keywords={["Bars"]}
        boosts={boosts}
        applyBoostOnSmelt={applyBoostOnSmelt}
        buyOrSmeltBars={buyOrSmeltBars}
        skill="Smithing"
        boostsDidUpdate={boostsDidUpdate}
      />
      {/* <StickyHeadTable/> */}
      <Footer />
    </>
  );
};

export default Smithing;
