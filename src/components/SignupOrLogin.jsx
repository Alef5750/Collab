import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

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
        <SignupOrLoginForm view={view} />
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
      <h2 className="my-4">{subtitle}</h2>
      <h3>{directions}</h3>
    </div>
  );
};

const SignupOrLoginForm = ({ view }) => {
  let nameFields = [
    {
      name: "firstName",
      defaultValue: "",
      type: "text",
      label: "",
      placeholder: "First name",
    },
    {
      name: "lastName",
      defaultValue: "",
      type: "text",
      label: "",
      placeholder: "Last name",
    },
  ];
  const otherFields = [
    {
      name: "email",
      defaultValue: "",
      type: "email",
      label: view === "login" ? "Enter your email" : "Your email address",
      placeholder: "myemail@email.com",
    },
    {
      name: "password",
      defaultValue: "",
      type: "password",
      label: view === "login" ? "Enter your password" : "Your password",
      placeholder: "Password",
    },
  ];

  return (
    <form className="d-flex flex-column" action="">
      <label>Your full name</label>
      <div className="d-flex gap-3">
        {nameFields.map((field) => {
          return (
            <div>
              <input
                type={field.type}
                className="form-control p-2 border-blue mr-1"
                placeholder={field.placeholder}
                value={field.value}
                key={field.key}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-3">
        {otherFields.map((field) => {
          return (
            <div>
              <label>{field.label}</label>
              <input
                type={field.type}
                className="form-control p-2 border-blue mr-1"
                placeholder={field.placeholder}
                value={field.value}
                key={field.key}
              />
            </div>
          );
        })}
      </div>
      <button className="btn btn-warning text-light align-self-end mt-5 px-4 text-uppercase">
        {view === "login" ? "Login" : "Sign up"}
      </button>
    </form>
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
