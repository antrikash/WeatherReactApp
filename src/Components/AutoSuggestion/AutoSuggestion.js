import React from "react";

import "./index.css";

const locationList = ({ list, onOptionSelect, ...inputProps }) => {
  const handleClick = item => () => {
    onOptionSelect(item);
  };
  return (
    <div>
      <label>Search: </label>
      <input {...inputProps} />
      {list.length > 0 && (
        <ol>
          {list.map((item, index) => (
            <li key={index} onClick={handleClick(item)}>
              {item.city.name}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default locationList;
