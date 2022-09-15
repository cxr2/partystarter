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
    <div
      className="capitalize m-2 col-2 d-flex justify-content-center"
      key={uuidv4()}
    >
      <span className="singlename p-2">{name}</span>
    </div>
  ));

  // const startRaffle = () => {
  //   if (listItems.length >= 10) return <button>start raffle</button>;
  // };

  let winner = nameList[Math.floor(Math.random() * nameList.length)];

  console.log(winner);

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
            <div className="col-6">
              <label htmlFor="fullName" className="p-2 namelabel">
                Enter your full name
              </label>

              <input
                type="text"
                name="fullName"
                className="p-3 fullname"
                placeholder="Full name"
                onChange={handleChange}
                value={name || ""}
                required
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <button
                  type="submit"
                  className="btn rafsub btn-primary mt-3"
                  onChange={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="nameDisplay container pt-5">
        <div className="row justify-content-center">
          {/* <ul className="rafflelist list-group list-group-horizontal"> */}
          {listItems}
          {/* </ul> */}
        </div>
        <div className="row justify-content-center">
          {nameList?.length >= 10 && (
            <div className="col-6 p-5">
              <button
                type="button"
                className="startraffle py-1 px-3"
                data-bs-toggle="modal"
                data-bs-target="#raffleWinner"
              >
                Start Raffle
              </button>
            </div>
          )}

          <div className="modal" id="raffleWinner">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Congratulations!</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body capitalize">{winner}</div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaffleForm;
