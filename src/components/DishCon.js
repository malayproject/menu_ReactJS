import React from "react";
import Data from "./Data";
import Dish from "./Dish";

function DishCon({ cat }) {
  let dishes =
    cat === "All"
      ? Data
      : Data.filter(
          (dish) => dish.category === cat[0].toLowerCase() + cat.slice(1)
        );
  console.log(dishes);
  return (
    <div className="dishCon">
      {
        dishes.map((dish) => (
          <Dish dishItem={dish} key={dish.id} />
        ))
        // cat === 'all'? Data.map(dish=> <Dish dishItem={dish} key={dish.id}/>) : Data.filter(dish=> dish.category === cat)
      }
    </div>
  );
}

export default DishCon;
