import React from "react";

function SignInWithEmail({setEmailActive}) {
  return (
    <div className="container mt-2 d-flex flex-column text-center">
      <div className="col-12 mt-3">
        <h3>Sign in with email</h3>
      </div>
      <div className="col-12">
        <p>
      
          Enter the email address associated with <br />
          your account, and we’ll send a magic link to <br />
          your inbox.
        </p>
      </div>
      <div className="col-12 mt-3 mb-5">
        <p>Your email</p>
        <div>
     
          <input
            type="text"
            style={{
              outline: "none",
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              borderBottom: "2px solid black",
              // borderRadius: "5px",
              textAlign: "center",
            }}
          />
        </div>
        <button type="button" class="btn btn-outline-dark mt-4" style={{width:'120px',borderRadius:'8px'}}>
          Continue
        </button>
      </div>
      <div className="col-12 mb-3 " >
        <p className='col-12 text-center' style={{color:'green',cursor:'pointer'}} onClick={()=>setEmailActive(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-square"
            viewBox="0 0 16 16"
            style={{marginBottom:'4px'}}
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
          <span style={{paddingLeft:'5px'}}>All sign in options</span>
        </p>
      </div>
    </div>
  );
}

export default SignInWithEmail;
