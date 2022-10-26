import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  library.add(fab);
  return (
    <React.Fragment>
      <div className="d-flex col-12 mt-5 bg-primary">
        <div className="col-1"></div>
        <nav className="nav flex-column col-2 large-font">
          <Link className="nav-link text-dark underline " to="/">
            <strong>Collab</strong>
          </Link>
          <Link className="nav-link text-dark underline " to="/">
            About us
          </Link>
          <Link className="nav-link text-dark underline " to="/">
            Create a project
          </Link>
          <Link className="nav-link text-dark underline " to="/">
            Join a project
          </Link>
          <Link className="nav-link text-dark underline " to="/">
            Contact us
          </Link>
        </nav>
        <nav className="nav flex-column  col-2 large-font mt-5">
          <Link className="nav-link text-dark underline " to="/">
            Blog and Tips
          </Link>
          <Link className="nav-link text-dark underline " to="/">
            Help
          </Link>
          <Link className="nav-link text-dark underline " to="/">
            FAQ
          </Link>
        </nav>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="text-center">
            <h3>FOLLOW US</h3>
          </div>
          <div className="d-flex">
            <div className="col-4"></div>
            <nav className="nav xlarge-font justify-content-between col-4 mt-5">
              <FontAwesomeIcon
                className="nav-link text-dark"
                icon={["fab", "facebook"]}
              />
              <FontAwesomeIcon
                className="nav-link text-dark"
                icon={["fab", "instagram"]}
              />
              <FontAwesomeIcon
                className="nav-link text-dark"
                icon={["fab", "linkedin"]}
              />
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
