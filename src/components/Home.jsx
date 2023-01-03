import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="border-primary bg-image pb-large">
          <div className="col-12 p-5"></div>
          <div className="bg-blur col-10 pt-5 mx-auto">
            <h1 className="text-center align-middle">
              Practice your skills. Collaborate. Gain experience.
            </h1>
            <h4 className="text-center w-50 ms-auto me-auto mt-5">
              This is a platform for entry level candidates to collaborate
              together on short term projects on a volunteer basis. You’ll gain
              experience, a project to add to your portfolio, learn how to work
              as a team and become more prepared for your interviews and future
              jobs
            </h4>
            <div className="d-flex mt-5">
              <Link
                className=" btn btn-warning text-light mx-auto me-5 col-2 p-3"
                to="/create-project"
              >
                CREATE A PROJECT
              </Link>
              <Link
                className="btn btn-primary mx-auto ms-5 col-2 p-3"
                to="/projects"
              >
                JOIN A PROJECT
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="text-center col-12 text-blue mb-5">
            HOW DOES IT WORK?
          </h2>
          <div className="mx-auto line"></div>
          <div className="col-12 bg-light mx-auto me-auto p-5">
            <h3 className="text-center text-blue">
              <FontAwesomeIcon
                className="text-blue"
                icon={regular("lightbulb")}
              />
              &nbsp;You have an idea? You need a team of people to help you
            </h3>
            <div className="d-flex">
              <div className="col-3 p-3 mx-auto text-center">
                <img src="\Sharing Ideas-bro (2).png" alt="sharing ideas" />
                <div>
                  <h3>
                    <b className="text-orange">POST A PROJECT</b>
                  </h3>
                  <p className="text-blue text-center px-5">
                    You have an idea for a project? You need People to help you
                    make it a reality?
                  </p>
                </div>
              </div>
              <div className="col-1">
                <FontAwesomeIcon
                  className="text-orange text-center caret"
                  icon={solid("caret-right")}
                />
              </div>
              <div className="col-3 p-3 mx-auto text-center">
                <img src="\Selecting team-bro (1) 1.png" alt="building team" />
                <div>
                  <h3>
                    <b className="text-orange"> BUILD A TEAM</b>
                  </h3>
                  <p className="text-blue text-center px-5">
                    Assemble a team of skilled professionals to make your idea
                    into a product
                  </p>
                </div>
              </div>
              <div className="col-1">
                <FontAwesomeIcon
                  className="text-orange text-center caret"
                  icon={solid("caret-right")}
                />
              </div>
              <div className="col-3 p-3 mx-auto text-center">
                <img src="\Collaboration-bro (1).png" alt="Collaborate!" />
                <div>
                  <h3>
                    <b className="text-orange">COLLABORATE</b>
                  </h3>
                  <p className="text-blue text-center px-5">
                    Start working together and learn from each other as you make
                    your idea into a product
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 text-center mx-auto">
              <Link
                className="btn btn-warning col-10 mt-50 p-3"
                to="/create-project"
              >
                CREATE A PROJECT
              </Link>
            </div>
          </div>
          <div className="col-12 bg-light mx-auto ms-auto">
            <h3 className="text-center text-orange">
              <FontAwesomeIcon className="text-orange" icon={solid("cog")} />
              &nbsp;You have skills? You'd like to collaborate on a project?
            </h3>
            <div className="d-flex">
              <div className="col-3 p-3 mx-auto text-center">
                <img src="/Load more-bro.png" alt="Select project" />
                <h3>
                  <b className="text-blue">SELECT A PROJECT</b>
                </h3>
                <p className="text-orange text-center px-5">
                  Browse the many interesting projects posted and select what
                  you'd like to work on
                </p>
              </div>
              <div className="col-1">
                <FontAwesomeIcon
                  className="text-blue text-center caret"
                  icon={solid("caret-right")}
                />
              </div>
              <div className="col-3 p-3 mx-auto text-center">
                <img src="/Business merger-bro.png" alt="Join a team" />
                <h3>
                  <b className="text-blue">JOIN A TEAM</b>
                </h3>
                <p className="text-orange text-center px-5">
                  Apply to join other skilled professionals and become a part of
                  the team
                </p>
              </div>
              <div className="col-1">
                <FontAwesomeIcon
                  className="text-blue text-center caret"
                  icon={solid("caret-right")}
                />
              </div>
              <div className="col-3 p-3 mx-auto text-center">
                <img src="Collaboration-bro (2).png" alt="Collaborate!" />
                <h3>
                  <b className="text-blue">COLLABORATE</b>
                </h3>
                <p className="text-orange text-center px-5">
                  Start working together and learn from each other as you make
                  your idea into a product
                </p>
              </div>
            </div>
            <div className="col-3 mx-auto text-center">
              <div className="col-12 text-center">
                <Link
                  className="btn btn-primary col-10 p-3 mt-50"
                  to="/projects"
                >
                  JOIN A PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center col-12 text-blue mb-5">Why Collab?</h2>
          <div className="mx-auto line mb-5"></div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-2 text-center mx-auto">
            <FontAwesomeIcon
              className="text-blue text-center team"
              icon={solid("people-group")}
            />
            <h3 className="text-center">
              <b className="text-blue">WORK WITH A TEAM</b>
            </h3>
            <p className="text-blue text-center">
              Learn how to collaborate with other professionals
            </p>
          </div>
          <div className="col-2 text-center  mx-auto">
            <FontAwesomeIcon
              className="text-blue text-center team"
              icon={solid("swatchbook")}
            />
            <h3 className="mt-2">
              <b className="text-blue text-center">GAIN EXPERIENCE</b>
            </h3>
            <p className="text-blue text-center">
              Develop your skills and get real experience
            </p>
          </div>
          <div className="col-2 text-center mx-auto">
            <FontAwesomeIcon
              className="text-blue text-center team"
              icon={solid("list-check")}
            />
            <h3>
              <b className="text-blue text-center">GET READY TO BE HIRED</b>
            </h3>
            <p className="text-center text-blue">
              Value this experience when interviewing for your next job
            </p>
          </div>
        </div>
        <div className="col-12 d-flex mt-5">
          <div className="col-2 text-center mx-auto">
            <FontAwesomeIcon
              className="text-blue text-center team"
              icon={solid("folder-closed")}
            />
            <h3>
              <b className="text-blue text-center">
                ADD PROJECTS TO YOUR PORTFOLIO
              </b>
            </h3>
            <p className="text-center text-blue">
              Expand your portfolio with the projects realized on Collab
            </p>
          </div>
          <div className="col-2 text-center mx-auto">
            <FontAwesomeIcon
              className="text-blue text-center team"
              icon={solid("layer-group")}
            />
            <h3>
              <b className="text-blue text-center">
                LEARN FROM OTHER PROFESSIONALS
              </b>
            </h3>
            <p className="text-center text-blue">
              Get a chance to work with other professionals and learn from them
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
