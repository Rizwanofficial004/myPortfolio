import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Layouts from "./pages/layouts";

import "./App.less";

const App = () => {

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 724px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return <Layouts />;
};

export default App;
