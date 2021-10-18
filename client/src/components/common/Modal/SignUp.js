import React from "react";
import SignInWithEmail from "./SignInWithEmail";
function SignUp({ setCreateAccount }) {
  const [emailActive, setEmailActive] = React.useState(false);

  return (
    <div className="container-fluid mt-4 d-flex flex-column text-center">
      {emailActive ? (
        <SignInWithEmail
          activeSignUp={emailActive}
          setActiveSignUp={setEmailActive}
          title="Sign up with email"
          text0="Enter your email address to create an"
          text1="account"
        />
      ) : (
        <>
          <div className="row p-2">
            <div className="col-12">
              <h3>Join AsyncJS.</h3>
            </div>
            <div className="col-sm-12">
              <button
                type="button"
                class="btn btn-outline-dark"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="/static/media/googleicon.010946f4.png"
                  style={{ width: "18px", height: "18px" }}
                  alt=""
                />
                <span className="pl-3">Sign Up with Google</span>
              </button>
            </div>
            <div className="col-sm-12">
              <button
                type="button"
                class="btn btn-outline-dark"
                style={{ borderRadius: "10px" }}
                onClick={() => setEmailActive(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>{" "}
                <span className="pl-3 pt-1"> Sign Up with Email</span>
              </button>
            </div>
            <div className="col-sm-12">
              <h4>
                Already have an account?
                <span
                  style={{ color: "green", cursor: "pointer" }}
                  onClick={() =>
                    setCreateAccount((prevDisplay) => !prevDisplay)
                  }
                >
                  Sign in
                </span>
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignUp;
