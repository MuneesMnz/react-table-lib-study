import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value,setValue]=useState(filter)
  const onChange=useAsyncDebounce((value)=>{
    setFilter(value || undefined)
  },500)
  return (
    <span>
      <span>
        Search :{" "}
        <input
          value={value || ""}
          onChange={(e) =>{
            setValue(e.target.value)
            onChange(e.target.value)
          }}
        />
      </span>
    </span>
  );
};

export default GlobalFilter;
