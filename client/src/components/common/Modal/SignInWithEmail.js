import React, { useEffect, useState } from "react";

function SignInWithEmail({
  setEmailActive,
  title,
  text0,
  text1,
  text2,
  activeSignUp,
  setActiveSignUp,
}) {
  const [signInData, setSignInData] = useState("");
  const [signUpData, setSignUpData] = useState("");
  const handleSubmit = () => {
    // console.log("sign up", signUpData);
    // console.log("signIn", signInData);
  };
  useEffect(()=>{
   document.getElementById('email-input').focus()
  },[])
  return (
    <div className="model-body container-fluid h-100 w-100 d-flex flex-column align-items-center justify-content-center text-center">
      <div className="row">
        <div className="col-12 mt-3">
          <h2>
            <strong>{title}</strong>
          </h2>
        </div>
        <div className="col-12" style={{color:'darkgrey'}}>
          <h5>
            {text0}
            <br />
            {text1}
            <br />
            {text2}
          </h5>
        </div>
        <div className="col-12 mt-3 mb-5">
          <h5>Your email</h5>
          <div>
            <input
              type="text"
              style={{
                outline: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "1px solid black",
                // borderRadius: "5px",
                textAlign: "center",
                width: "48%",
                fontSize:'20px'
              }}
              id="email-input"
              onChange={(e) => {
                activeSignUp
                  ? setSignUpData(e.target.value)
                  : setSignInData(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            class="btn signin-email-btn mt-3"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
        <div className="col-12 mb-3">
          <p
            className="col-12"
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => {
              activeSignUp ? setActiveSignUp(false) : setEmailActive(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-square"
              viewBox="0 0 16 16"
              style={{ marginBottom: "4px" }}
            >
              <path
                fill-rule="evenodd"
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

export default SignInWithEmail;
