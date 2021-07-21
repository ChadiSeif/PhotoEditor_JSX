import React from "react";
import { Button } from "react-bootstrap";

const SideBarItem = ({ element, setOptionindex, active, setFilterSet }) => {
  console.log(active);

  return (
    <div className="SideBarItem">
      <Button
        style={{ backgroundColor: active ? "rgba(255, 0, 0, 0.486)" : null }}
        variant="light"
        onClick={() => {
          setOptionindex(element.id);
          setFilterSet(element.name);
        }}
      >
        {element.name}
      </Button>
    </div>
  );
};

export default SideBarItem;
