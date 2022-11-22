import React, { useState } from "react";
import "./index.css";


const EvenOdd = () => {
  const [categories, setCategories] = React.useState([]);
  const [item, setItem] = React.useState("");

  const addCategory = e => { 
    const trimmed = item.trim();

    if (trimmed && !categories.includes(trimmed)) {
      setCategories(prevState => prevState.concat(trimmed));
    }
  };

  return (
    <div>
      <input
        onChange={e => setItem(e.target.value)}
        value={item}
      />&nbsp;
      <button onClick={addCategory}>Add Item</button>
      <ul>{categories.map(e => <li key={e}>{e}</li>)}</ul>
    </div>
  );
};


export default EvenOdd;
