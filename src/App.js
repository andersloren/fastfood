import React, { useState } from "react";

import "./styles/AppStyles.css";

import Menu from "./Menu";
import SwitchHandler from "./hooks/SwitchHandler";

const App = () => {

  const {
    handleSwitchChange,
    isSwitchOn,
    theme,
    backgroundColor,
    textColor,
  } = SwitchHandler();

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
        <Menu isSwitchOn={isSwitchOn}/>
      </div>
    </>
  );
};

export default App;
