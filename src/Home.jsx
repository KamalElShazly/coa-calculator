import React from "react";

import { Tabs, Tab, Box } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import Smithing from "./tabs/Smithing";
import Cooking from "./tabs/Cooking";
import Crafting from "./tabs/Crafting";
import Mining from "./tabs/Mining";
import Woodcutting from "./tabs/Woodcutting";
import Fishing from "./tabs/Fishing";
import Combat from "./tabs/Combat";

// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

const Home = (props) => {
  const { match, history, currentTheme, updateCurrentTheme } = props;
  const { params } = match;
  const { page } = params;
  // const currTheme = currentTheme;
  // console.log('Current theme', currentTheme);

  const tabNameToIndex = {
    0: "smithing",
    1: "crafting",
    2: "cooking",
    3: "mining",
    4: "woodcutting",
    5: "fishing",
    6: "combat",
  };

  const indexToTabName = {
    smithing: 0,
    crafting: 1,
    cooking: 2,
    mining: 3,
    woodcutting: 4,
    fishing: 5,
    combat: 6,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  // const [currentTheme, setCurrentTheme] = useState("dark");
  // const updateCurrentTheme = () => {
  //   if (currentTheme === "dark") {
  //     setCurrentTheme("light");
  //   } else {
  //     setCurrentTheme("dark");
  //   }
  // };

  // const theme = createTheme({
  //   palette: {
  //     mode: currentTheme,
  //   },
  // });

  return (
    <>
      <Header
        title="Curse of Aros Skills Calculator"
        updateTheme={updateCurrentTheme}
        currentTheme={currentTheme}
      />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 1 }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            // scrollButtons={false}
          >
            <Tab label="Smithing" />
            <Tab label="Crafting" />
            <Tab label="Cooking" />
            <Tab label="Mining" />
            <Tab label="Woodcutting" />
            <Tab label="Fishing" />
            <Tab label="Combat"/>
          </Tabs>
          {/* <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
          >
          <Tab label="Combat"/>
          </Tabs> */}
        </Box>
      </Box>
      {selectedTab === 0 && <Smithing />}
      {selectedTab === 1 && <Crafting />}
      {selectedTab === 2 && <Cooking />}
      {selectedTab === 3 && <Mining />}
      {selectedTab === 4 && <Woodcutting />}
      {selectedTab === 5 && <Fishing />}
      {selectedTab === 6 && <Combat />}
    </>
  );
};

export default Home;
