import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid mx-lg-5 px-5 py-3">
        <NavLink to="/">
          <h1 className="navbar-brand">PartyStarter</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/partychat">
              Party Chat
            </NavLink>
            <NavLink className="nav-link" to="/charades">
              Charades
            </NavLink>
            <NavLink className="nav-link" to="/raffle">
              Raffle
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
