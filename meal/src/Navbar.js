import React from "react";
import { NavLink } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <NavLink className="navbar-brand" to="/">
              <IoFastFood className="logo" />MEAL MATES
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Service">
                  Service
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Donor">
                Donate
                </NavLink>
              </li>  

              <li className="nav-item">
                <NavLink className="nav-link" to="/LoginRegister">
                  Login
                </NavLink>
              </li>  

              <li className="nav-item"> 
                <NavLink className="nav-link" to="/Cart">
                <FaCartShopping />
                </NavLink >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;