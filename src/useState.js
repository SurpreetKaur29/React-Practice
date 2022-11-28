import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import "./index.css";

const DataForm = () => {
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState([]);
  const [record, setRecord] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState([]);

  // input onchange
  const onChanged = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
    //console.log(e.target.value)
  };

  // on submit
  const saveRecord = (e) => {
    e.preventDefault();
    setError(null);
    if (!record.name) {
      setError({ name: "This field is required." });
    } else if (!record.email) {
      // console.log("!record.email", !record.email);
      setError({ email: "This field is required." });
    } else {
      const arrIndex = detail.findIndex((item) => item.email === record.email);
      if (arrIndex === -1) {
        setRecord({
          name: "",
          email: "",
        });
        setDetail([...detail, record]);
        setError();
      } else {
        alert("Email should not be repeated!");
      }
    }
  };

  //on update
  const updateRecord = (e) => {
    const newUpdate = [...detail];
    e.preventDefault();
    setError(null);
    if (!record.name) {
      setError({ name: "This field is required." });
    } else {
      const arrIndex = detail.findIndex((item) => item.email === record.email);
      if (arrIndex === -1) {
        return;
      } else {
        newUpdate[arrIndex].name = record.name;
        setDetail(newUpdate);
        setRecord({
          name: "",
          email: "",
        });
        setEdit(false);
        setError();
      }
    }

    console.log("detail", detail);
  };

  // on delete
  const deleted = (index, e) => {
    const checkFilter = (item, i) => i !== index;
    setDetail(detail.filter(checkFilter));
    setEdit(false);
    console.log("index", index);
  };

  // on edit
  const edited = (item) => {
    console.log("edited");
    setEdit(true);
    setRecord(item);
  };

  // on checkmark
  const checkedForDelete = (index) => {
    const i = checked.indexOf(index);
    if (i > -1) {
      setChecked(checked.filter((c) => c !== index));
    } else {
      setChecked([...checked, index]);
    }
  };

  //Delete all
  const deleteSelected = (e, index) => {
    console.log("checked", checked);
  }

  return (
    <>
      <div className="margin-auto form-div">
        <form onSubmit={edit ? updateRecord : saveRecord}>
          <h3>Fill the form</h3>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={record.name}
            onChange={onChanged}
          />
          <br />
          {error?.name && <small>{error.name}</small>}
          <br />
          <br />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={record.email}
            onChange={onChanged}
            disabled={edit}
          />
          <br />
          {error?.email && <small>{error.email}</small>}
          <br />
          <br />
          {edit ? <button>Update</button> : <button>Submit</button>}
        </form>
      </div>
      <div className="margin-auto">
        <div className="del_main">
          <button className="del" onClick={deleteSelected}>Delete</button>
        </div>
        <table width="100%">
          <thead>
            <tr>
              <th>
                <input type="checkbox" disabled />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => checkedForDelete(index)}
                      name={item.name}
                      value={index}
                      id={`checkbox-${index}`}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => edited(item)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={(e) => deleted(index, e)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataForm;
