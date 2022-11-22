import React, { useState } from "react";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const App = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    name: "Cuilsoft",
    email: "cuilsoft@gmail.com",
  });
  const updatedInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const printInfo = (e) => {
    e.preventDefault();
    setData([...data, info]);
    setInfo({
      name: "",
      email: "",
    });
  };
  const Deleted = (index, e) => {
    setData(data.filter((item, i) => i !== index));
  };
  // const Edited = () => {

  // };
  // const [number, setNumber] = useState(0);

  // function addition() {
  //   number < 10 ? setNumber(number + 1) : setNumber(10);
  // }

  // function substraction() {
  //   if (number > 0) {
  //     setNumber(number - 1);
  //   }
  // }

  return (
    <>
      <div className="margin-auto form-div">
        <form onSubmit={printInfo}>
          <h3>Fill the form</h3>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={updatedInfo}
            required
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={info.email}
            onChange={updatedInfo}
            required
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div className="margin-auto">
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={Edited}>
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button onClick={(e) => Deleted(index, e)}>
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="margin-auto">
        <div className="counter">
          <p>{number}</p>
          <h4>Value is {number % 2 == 0 ? "Even" : "Odd"}</h4>
        </div>
        <div className="buttons">
          <button onClick={addition}>+</button>
          <button onClick={() => setNumber(0)}>
            <small>Reset</small>
          </button>
          <button onClick={substraction}>-</button>
        </div>
      </div> */}
    </>
  );
};

export default App;
