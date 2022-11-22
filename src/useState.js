import React, { useState } from "react";
import "./index.css";


const EvenOdd = () => {
  const [name, setName] = useState("World");
  const changeName = () => setName(name == "World" ? "Everyone" : "World");
  
  return (
    <>
      <div className="margin-auto">
        <div className="counter">
          <p>Hello {name}</p>
          <button onClick={changeName}>Change Name</button>
        </div>
      </div>
    </>
  );
};

export default EvenOdd;
