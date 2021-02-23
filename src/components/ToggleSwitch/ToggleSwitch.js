import React, {useState, useContext} from "react";
import Toggle from "react-toggle";
import StyleContext from "../../contexts/StyleContext";
// import styles from  "./ToggleSwitch.css";
import  "./ToggleSwitch.css";

import "react-toggle/style.css"

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  const Dark = ({icon, style}) => (
    <span className={"toggle dark"} style={style}>
      {icon}
    </span>
  );
  const Light = ({icon, style}) => (
    <span className={"toggle light"} style={style}>
      {icon}
    </span>
  );

  return (
    <Toggle
      icons={{
        checked: <Dark icon={"🌜"} />,
        unchecked: <Light icon={"🌞"} />
      }}
      onChange={() => {
        styleContext.changeTheme();
        setChecked(!isChecked);
      }}
    />
  );
};
export default ToggleSwitch;
