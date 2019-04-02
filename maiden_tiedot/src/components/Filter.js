import React from "react";

const Filter = ({ filter, eventHandler }) => (
  <div>
    Search countries:
    <input value={filter} onChange={eventHandler} />
  </div>
);

export default Filter;
