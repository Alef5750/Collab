import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SignupOrLogin() {
  const [view, setView] = useState("login");

  const toggleView = (view) => {
    if (view === "login") {
      setView("signup");
    } else setView("login");
  };
  return (
    <div className="signup-login-layout">
      <div className="signup-login-box">
        <Titles view={view} />
        <BottomSection view={view} toggleView={toggleView} />
      </div>
    </div>
  );
}

const Titles = ({ view }) => {
  let title, subtitle, directions;
  if (view === "login") {
    title = "Login";
    subtitle = "Welcome Back!";
    directions = "Please log in to your account";
  } else if (view === "signup") {
    title = "Signup";
    subtitle = "Welcome!";
    directions = "Please fill in the following information";
  }
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{directions}</h3>
    </div>
  );
};

const BottomSection = ({ view, toggleView }) => {
  let message, btnText;
  if (view === "login") {
    message = "Don't have an account yet?";
    btnText = "SIGN UP";
  } else if (view === "signup") {
    message = "Already have an account";
    btnText = "LOG IN";
  }

  return (
    <div>
      <span>{message}</span>
      <button
        type="button"
        className="signup-login-btn"
        onClick={() => toggleView(view)}
      >
        {btnText}
      </button>
    </div>
  );
};
