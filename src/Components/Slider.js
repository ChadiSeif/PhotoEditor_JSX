import React from "react";

const Slider = ({ Properties, setValue, min, max }) => {
  return (
    <div className="sliderContainer">
      <input
        type="range"
        className="slider"
        onClick={(e) => setValue(e.target.value)}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Slider;
