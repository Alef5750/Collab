import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  library.add(fab);
  return (
    <React.Fragment>
      <div className="d-flex col-12 mt-5 bg-blue">
        <div className="col-1"></div>
        <nav className="nav flex-column col-2 large-font">
          <Link className="nav-link text-light underline " to="/">
            <img src="Collab-Logo-White.png" alt="Collab Logo" />
          </Link>
          <Link className="nav-link text-light underline " to="/">
            About us
          </Link>
          <Link className="nav-link text-light underline " to="/">
            Create a project
          </Link>
          <Link className="nav-link text-light underline " to="/">
            Join a project
          </Link>
          <Link className="nav-link text-light underline " to="/">
            Contact us
          </Link>
        </nav>
        <nav className="nav flex-column  col-2 large-font mt-5">
          <Link className="nav-link text-light underline " to="/">
            Blog and Tips
          </Link>
          <Link className="nav-link text-light underline " to="/">
            Help
          </Link>
          <Link className="nav-link text-light underline " to="/">
            FAQ
          </Link>
        </nav>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="text-center">
            <h3 className="text-light">FOLLOW US</h3>
          </div>
          <div className="d-flex">
            <div className="col-4"></div>
            <nav className="nav xlarge-font justify-content-between col-4 mt-5">
              <FontAwesomeIcon
                className="nav-link text-white"
                icon={["fab", "facebook"]}
              />
              <FontAwesomeIcon
                className="nav-link text-white"
                icon={["fab", "instagram"]}
              />
              <FontAwesomeIcon
                className="nav-link text-white"
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
