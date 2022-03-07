import React, { useState } from "react";
import Heading from "./components/Heading";
import CtgryCon from "./components/CtgryCon";
import DishCon from "./components/DishCon";
import Data from "./components/Data";
import "./App.css";

function App() {
  const [cat, setCat] = useState("All");
  const handleClick = (e) => {
    let val = e.target.innerHTML;
    // val = val[0].toLowerCase() + val.slice(1);
    console.dir(e.target.children.length);
    if (e.target.children.length !== 0) return;
    setCat(val);
  };
  // console.log(cats)
  return (
    <main className="main">
      <Heading />
      <CtgryCon handleClick={handleClick} cat={cat} />
      <DishCon cat={cat} />
    </main>
  );
}

export default App;
