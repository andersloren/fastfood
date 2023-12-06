import React, { useState } from "react";

import "./styles/AppStyles.css";

import Menu from "./Menu";

const App = () => {
  const [theme, setTheme] = useState("light-theme");
  const [buttonColor, setButtonColor] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setButtonColor("bright");
    } else {
      setTheme("light-theme");
      setButtonColor("dark");
    }
  };

  return (
    <div className={`App ${theme}`}>
      <button className={`btn-custom ${buttonColor} m-2 mx-3`} onClick={toggleTheme}>
        {theme == "light-theme" ? "Dark" : "Light"}
      </button>
      <Menu />
    </div>
  );
};

export default App;
