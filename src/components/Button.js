import React from "react";

const Button = ({ clicked, text }) => {
  return (
    <div className="col d-flex align-self-center justify-content-center">
      <button className="py-2 px-2 mt-3" onClick={clicked}>
        {text}
      </button>
    </div>
  );
};

export { Button };
