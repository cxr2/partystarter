import React from "react";

const Button = ({ clicked, text }) => {
  return (
    <div className="col-2 charadesBtns">
      <button onClick={clicked}>{text}</button>
    </div>
  );
};

export { Button };
