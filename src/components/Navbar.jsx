import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="nav-link ps-3" to="/">
          <img src="collab-logo-1.svg" alt="Collab Logo" />
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-fill justify-content-right col-9">
          <li className="nav-item">
            <NavLink className="nav-link text-blue text-bold" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-blue text-bold"
              to="/create-project"
            >
              Create a project
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-blue text-bold" to="/projects">
              Join a Project
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-blue text-bold" to="/learn">
              Learn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-blue text-bold" to="/Login">
              Sign up / Log in
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
