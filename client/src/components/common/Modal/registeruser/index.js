import "./index.css";
import { FormInput } from "../../../index";
import * as action from "../../../../redux/actions/authaction";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function RegisterUser() {
  var [userdetail, setUserDetail] = useState({});
  const disptach = useDispatch();

  function handleInput(event) {
    userdetail[event.target.id] = event.target.value;
    setUserDetail(userdetail);
  }

  function handleSubmit() {
    console.log(userdetail);
    if (userdetail !== null) {
      if (
        userdetail.fullName !== "" &&
        userdetail.email !== "" &&
        userdetail.password !== ""
      ) {
        if (userdetail.password === userdetail.confirmpassword) {
          console.log("Password match", userdetail.password);
          delete userdetail.confirmpassword
          disptach(action.postUser(userdetail))
        } else {
          console.log("Password did not match", userdetail.confirmpassword);
        }
      }
    } else {
      alert("Please fill user detail first");
    }
  }

  return (
    <div className="model-body container-fluid h-100 w-100 d-flex flex-column align-items-center justify-content-center text-center">
      <div className="row">
        <div className="col-12 mt-3">
          <h2>
            <strong>Sign Up With Email</strong>
          </h2>
        </div>
        <div className="col-12 mt-3 mb-5 register_style">
          <div className="input_outer">
            <FormInput
              className="input_style"
              inputType="text"
              placeHolder="Enter your fullName"
              inputId="fullName"
              onInputChange={handleInput}
            />
          </div>
          <div className="input_outer">
            <FormInput
              className="input_style"
              inputType="text"
              placeHolder="Enter your email"
              inputId="email"
              onInputChange={handleInput}
            />
          </div>

          <div className="input_outer">
            <FormInput
              className="input_style"
              inputType="password"
              placeHolder="Enter your password"
              inputId="password"
              onInputChange={handleInput}
            />
          </div>
          <div className="input_outer">
            <FormInput
              className="input_style"
              inputType="password"
              placeHolder="Enter your confim password"
              inputId="confirmpassword"
              onInputChange={handleInput}
            />
          </div>
          <button
            type="button"
            className="btn singup-email-button mt-3"
            onClick={() => handleSubmit()}
          >
            sign up
          </button>
        </div>
        <div className="col-12 mb-3">
          <p className="col-12" style={{ color: "green", cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-square"
              viewBox="0 0 16 16"
              style={{ marginBottom: "4px" }}
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            <p className="text-success">All sign in options</p>
          </p>
        </div>
      </div>
    </div>
  );
}
