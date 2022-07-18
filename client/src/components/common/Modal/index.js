import React, { useState, useEffect } from "react";
import SignInWithEmail from "./SignInWithEmail";
import SignUp from "./SignUp";
function Modal({ buttonName, title }) {
  const [emailActive, setEmailActive] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ width: "120px" }}
      >
        {buttonName}
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ top: "12%", left: "-5%" }}
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{
                border: "none",
                position: "absolute",
                right: "4%",
                top: "0%",
                fontSize: "40px",
              }}
              onClick={() => {
                setCreateAccount(false);
                setEmailActive(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {createAccount ? (
              <SignUp setCreateAccount={setCreateAccount} />
            ) : emailActive ? (
              <SignInWithEmail
                active={emailActive}
                setEmailActive={setEmailActive}
                title="Sign In With Email"
                text0=" Enter the email address associated with"
                text1="    your account, and we’ll send a magic link to"
                text2="your inbox."
              />
            ) : (
              <>
                <div className="modal-body container-fluid d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="row">
                    <div className="col-sm-12 mt-2">
                      <h2>
                        <strong>Welcome To AsynchronousJS</strong>
                      </h2>
                    </div>
                    <div className="col-12 mt-5">
                      <button type="button" className="btn signin-google-btn">
                        <img
                          src="/static/media/googleicon.010946f4.png"
                          style={{ width: "25px", height: "20px" }}
                          alt=""
                        />

                        <span className="pl-3"> Sign In with Google</span>
                      </button>
                    </div>

                    <div className="col-12 mt-3 mb-4">
                      <button
                        type="button"
                        className="btn signin-email-btn"
                        onClick={() => setEmailActive(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="20"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg>
                        <span className="pl-3 pt-1"> Sign In with Email</span>
                      </button>
                    </div>
                    <div
                      className="col-sm-12"
                      onClick={() => setCreateAccount(true)}
                    >
                      <p>
                        No account?
                        <span
                          style={{
                            color: "green",
                            fontWeight: "600",
                            cursor: "pointer",
                            marginLeft:'5px'
                          }}
                        >
                          Create One
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
