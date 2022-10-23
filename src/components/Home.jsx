import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="border-dark bg-light p-5">
          <h1 className="text-center align-middle mt-50">
            Practice your skills. Collaborate. Gain experience.
          </h1>
          <h4 className="text-center w-50 ms-auto me-auto mt-5">
            This is a platform for entry level candidates to collaborate
            together or short term projects on a volunteer basis. You’ll gain
            experience, a prokect to add to your portfolio, learn how to work as
            a team and become more prepared for your interviews and future jobs
          </h4>
          <div className="d-flex mt-50">
            <Link
              className="btn btn-outline-dark mx-auto me-3 col-2"
              to="/create-project"
            >
              CREATE A PROJECT
            </Link>
            <Link
              className="btn btn-outline-dark mx-auto ms-3 col-2"
              to="/projects"
            >
              JOIN A PROJECT
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-center mt-3 col-12">HOW DOES IT WORK?</h2>
          <div className="d-flex">
            <div className="col-5 bg-light mx-auto me-auto p-5">
              <h1 className="text-center">You have an idea?</h1>
              <h3 className="text-center">
                You need a team of people to help you
              </h3>
              <div className="d-flex">
                <div className="border border-dark col-3 p-3 mx-auto text-center">
                  POST A PROJECT
                </div>
                <div className="border border-dark col-3 p-3 mx-auto text-center">
                  BUILD A TEAM
                </div>
                <div className="border border-dark col-3 p-3 mx-auto text-center">
                  COLLABORATE
                </div>
              </div>
              <Link
                className="btn btn-outline-dark col-10 ms-5 mt-50"
                to="/create-project"
              >
                CREATE A PROJECT
              </Link>
            </div>
            <div className="col-5 bg-light mx-auto ms-auto p-5">
              <h1 className="text-center">You have skills?</h1>
              <h3 className="text-center">
                You'd like to collaborate on a project?
              </h3>
              <div className="d-flex">
                <div className="border border-dark col-3 p-3 mx-auto text-center">
                  SELECT A PROJECT
                </div>
                <div className="border border-dark col-3 p-3 mx-auto text-center">
                  JOIN A TEAM
                </div>
                <div className="border border-dark col-3 p-3 mx-auto text-center">
                  COLLABORATE
                </div>
              </div>
              <Link
                className="btn btn-outline-dark col-10 ms-5 mt-50"
                to="/projects"
              >
                JOIN A PROJECT
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
