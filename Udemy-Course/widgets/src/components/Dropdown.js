import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleBodyClick = (e) => {
      // if the user clicked on any child element inside the form(ref) then return without modifying the state of open(remains false).
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      // else if the user clicks anywhere else in the body
      setOpen(false);
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={(e) => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible true" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
