import { useState } from "react";

const SwitchHandler = () => {
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

  return {
    handleSwitchChange,
    isSwitchOn,
    theme,
    backgroundColor,
    textColor,
  };
};

export default SwitchHandler;
