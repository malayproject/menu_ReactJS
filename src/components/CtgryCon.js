import React, { useState, useEffect } from "react";
import Data from "./Data";

function CtgryCon({ handleClick, cat }) {
  const cats = new Set();
  cats.add("All");
  Data.forEach((dish) => {
    cats.add(dish.category[0].toUpperCase() + dish.category.slice(1));
  });
  const highlightSelected = (e) => {
    // if(e.target.innerHTML === cats)
  };
  const clickHandler = (e) => {
    highlightSelected(e);
    handleClick(e);
  };

  return (
    <div className="ctgryCon" onClick={(e) => clickHandler(e)}>
      {Array.from(cats).map((element, i) => {
        // console.log(element)
        return (
          <div
            className={`ctgry ${cat === element ? "selected" : ""}`}
            key={i + 1}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
}

export default CtgryCon;
