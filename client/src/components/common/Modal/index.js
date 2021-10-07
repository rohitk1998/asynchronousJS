import React, { useState,useEffect } from "react";
import SignInWithEmail from "./SignInWithEmail";
import SignUp from "./SignUp";
function Modal({
  buttonName,
  title,


}) {
  const [emailActive, setEmailActive] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);


  

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ width: "120px" }}
      >
        {buttonName}
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ backgroundColor: "white" }}
      >
        <div class="modal-dialog" role="document" style={{ top: "12%" }}>
          <div class="modal-content ">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{
                border: "none",
                position: "absolute",
                right: "4%",
                top: "0%",
                fontSize: "30px",
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
                title="Sign in with Email"
                text0=" Enter the email address associated with"
                text1="    your account, and we’ll send a magic link to"
                text2="your inbox."
              />
            ) : (
              <>
                <div
                  class="modal-header"
                  style={{ borderBottom: "none", justifyContent: "center" }}
                >
                  <h2 class="modal-title mt-5" id="exampleModalLabel">
                   {title}
                  </h2>
                </div>
                <div class="modal-body text-center">
                  <div className="col-12 mt-5">
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

                      <span className="pl-3"> Sign In with Google</span>
                    </button>
                  </div>

                  <div className="col-12 mt-3 mb-4">
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
                      </svg>
                      <span className="pl-3 pt-1"> Sign In with Email</span>
                    </button>
                  </div>
                  <div
                    className="col-12 mt-5 mb-5"
                    onClick={() => setCreateAccount(true)}
                  >
                    <h4>
                      No account?
                      <span
                        style={{
                          color: "green",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        Create One
                      </span>
                    </h4>
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
