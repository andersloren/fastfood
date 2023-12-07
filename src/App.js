import React, { useState } from "react";

import "./styles/AppStyles.css";

import Menu from "./Menu";

const App = () => {
  const [theme, setTheme] = useState("theme-light");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [backgroundColor, setSwitchColor] = useState("background-light");
  const [textColor, setTextColor] = useState("text-dark");

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
    if (theme === "theme-light") {
      setTheme("theme-dark");
      setTextColor("text-light");
      setSwitchColor("background-dark")
    } else {
      setTheme("theme-light");
      setTextColor("text-dark");
      setSwitchColor("background-light")
    }
  };

  return (
    <div className={`App ${theme}`}>
      <div className={`form-check form-switch switch-custom ${backgroundColor}`}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
        />
        <label className={`form-check-label switch-custom ${textColor}`} for="flexSwitchCheckDefault">
          {theme == "theme-light" ? "Dark" : "Bright"}
        </label>
      </div>
      <Menu theme={theme}/>
    </div>
  );
};

export default App;
