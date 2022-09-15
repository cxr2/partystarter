import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function RaffleForm() {
  const [nameList, setNameList] = useState(() => {
    const saved = localStorage.getItem("nameList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [name, setName] = useState("");

  const listItems = nameList.map((name) => (
    <li className="capitalize" key={uuidv4()}>
      {name}
    </li>
  ));

  // const startRaffle = () => {
  //   if (listItems.length >= 10) return <button>start raffle</button>;
  // };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameList([name, ...nameList]);
    setName();
    console.log(nameList);
  };

  useEffect(() => {
    localStorage.setItem("nameList", JSON.stringify(nameList));
  }, [nameList]);

  // const capitalise = name.split(" ");
  // for (let i = 0; i < name.length; i++) {
  //   name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
  // }

  // const capitalisedNames = capitalise.join(" ");
  // console.log(capitalisedNames);

  // const getData() {
  //   console.log(localStorage.getItem('name', name)),
  // }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-6 ">
              <label htmlFor="fullName" className="p-2">
                Enter your full name
              </label>
            </div>
          </div>
          <div className="row justify-content-center pb-3">
            <div className="col-6">
              <input
                type="text"
                name="fullName"
                className="p-3"
                placeholder="Full name"
                onChange={handleChange}
                value={name || ""}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <button
                type="submit"
                className="btn btn-primary m-2"
                onChange={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="nameDisplay">
        <ul>{listItems}</ul>
        {nameList?.length >= 10 && <button>start raffle</button>}
      </div>
    </>
  );
}

export default RaffleForm;
