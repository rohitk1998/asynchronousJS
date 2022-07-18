import React,{useState} from "react";
import RegisterUser from "./registeruser/index"
function SignUp({ setCreateAccount }) {
  const [emailActive, setEmailActive] = useState(false);

  return (
    <div className="modal-body container-fluid h-100 w-100 d-flex flex-column align-items-center justify-content-center text-center">
      {emailActive ? (
        <RegisterUser/>
      ) : (
        <>
          <div className="row">
            <div className="col-sm-12">
              <h2>
                <strong>Join AsynchronousJS</strong>
              </h2>
            </div>
            <div className="col-sm-12 mt-5">
              <button type="button" className="btn signin-google-btn">
                <img
                  src="/static/media/googleicon.010946f4.png"
                  style={{ width: "18px", height: "18px" }}
                  alt=""
                />
                <span className="pl-3">Sign Up with Google</span>
              </button>
            </div>
            <div className="col-sm-12 mt-3 mb-4">
              <button
                type="button"
                className="btn signin-email-btn"
                onClick={() => setEmailActive(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>{" "}
                <span className="pl-3 pt-1"> Sign Up with Email</span>
              </button>
            </div>
            <div className="col-sm-12">
              <p>
                Already have an account?
                <span
                  style={{
                    color: "green",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                  onClick={() =>
                    setCreateAccount((prevDisplay) => !prevDisplay)
                  }
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignUp;
