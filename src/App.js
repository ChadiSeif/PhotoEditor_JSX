import React, { useState } from "react";
import "./App.css";
import SideBarItem from "./Components/SideBarItem";
import Slider from "./Components/Slider";
import { Properties } from "./data";

console.log(Properties);

function App() {
  const [optionIndex, setOptionindex] = useState(0);
  const colored = Properties[optionIndex];
  // const [data, setdata] = useState(Properties);
  const [filtername, setFilterSet] = useState();

  const [value, setValue] = useState();
  console.log(value);

  return (
    <div className="App">
      <div className="Container">
        <div
          className="mainImage"
          style={{ filter: `${filtername}(${value}%)` }}
        >
          image
        </div>
        <div className="sidebar">
          {Properties.map((element, i) => (
            <SideBarItem
              key={element.id}
              element={element}
              setOptionindex={setOptionindex}
              active={colored.id === element.id}
              setFilterSet={setFilterSet}
            />
          ))}
        </div>

        <Slider
          Properties={Properties}
          setValue={setValue}
          min={colored.range.min}
          max={colored.range.max}
          value={colored.value}
          // colorchange={handleColorChange()}
        />
      </div>
    </div>
  );
}

export default App;
