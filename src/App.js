import React, { useState } from "react";

import "./styles/AppStyles.css";

import Menu from "./Menu";
import Burger from "./Burger";
import Pizza from "./Pizza";
import Fries from "./Fries";
import YourOrder from "./YourOrder";
import Total from "./Total";

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [theme, setTheme] = useState("theme-light");
  const [backgroundColor, setSwitchColor] = useState("background-light");
  const [textColor, setTextColor] = useState("text-dark");

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
    if (!isSwitchOn) {
      setTheme("theme-dark");
      setTextColor("text-light");
      setSwitchColor("background-dark");
    } else {
      setTheme("theme-light");
      setTextColor("text-dark");
      setSwitchColor("background-light");
    }
  };

  return (
    <>
        <div className={`App ${theme}`}>
          <div
            className={`form-check form-switch slider switch-custom ${backgroundColor}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={isSwitchOn}
              onChange={handleSwitchChange}
            />
            <label
              className={`form-check-label switch-custom ${textColor}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {theme === "theme-light" ? "Bright Mode" : "Dark Mode"}
            </label>
          </div>
          <Menu isSwitchOn={isSwitchOn} />
          <YourOrder isSwitchOn={isSwitchOn} />
          <Burger />
          <Pizza />
          <Fries  />
          <Total />
        </div>
    </>
  );
};

export default App;
