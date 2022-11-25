import React, { useState } from "react";
import "./index.css";


const DataForm = () => {
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState([]);
  const [record, setRecord] = useState({
      name:"",
      email:""
  });

  const onChanged = (e) => {
    setRecord({
      ...record,
      [e.target.name] : e.target.value
    }
    )
    //console.log(e.target.value)
  };

  const saveRecord = (e) => {
    e.preventDefault();
    const arrIndex = detail.findIndex((item) => item.email === record.email);
    if(arrIndex === -1){
    setRecord({
      name:"",
      email:""
    });
    setDetail([...detail, record]);
    }else{
      alert("Email should not be repeated!")
    }
    console.log("detail", detail); 
  };  

  const updateRecord = (e) => {
    const newUpdate = [...detail]
    e.preventDefault();
    const arrIndex = detail.findIndex((item) => item.email === record.email);
    if(arrIndex === -1){
    return ;
    }else{
    newUpdate[arrIndex].name = record.name;
    setDetail(newUpdate);
    setRecord({
      name:"",
      email:""
    });
    setEdit(false);
    }
    console.log("detail", detail); 
  };  

  const deleted = (index, e) => {
    const checkFilter = (item, i) => i !== index;
    setDetail(
      detail.filter(checkFilter)
    )
    setEdit(false);
    console.log("index", index);
  }

  const edited = (item) => {
    console.log("edited");
    setEdit(true);
    setRecord(item);
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
            required
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={record.email}
            onChange={onChanged}
            required
            disabled={edit}
          />
          <br />
          <br />
          {edit ? <button>Update</button>  : <button>Submit</button>}
        </form>
      </div>
      <div className="margin-auto">
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((item, index) => {
              return(
              <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => edited(item)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={(e) => deleted(index, e)}>
                  Delete
                </button>
              </td>
            </tr>
            )})} 
          </tbody>
        </table>
      </div>
    </>
  );
};


export default DataForm;
