import React from "react";

function SignUp({setCreateAccount}) {
  return (
    
    <div className="container mt-5 d-flex flex-column text-center">
      <div className="col-12 mt-5">
        <h3 style={{fontWeight:'600'}}>Join AsyncJS.</h3>
      </div>
      <div className="col-12 mt-5">
        
        <button
          type="button"
          class="btn btn-outline-dark"
          style={{ borderRadius: "10px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          <span className="pl-3">SignIn up with Google</span>
        </button>
        <div className="col-12 mt-3 mb-3">
           
                  <button type="button" class="btn btn-outline-dark"   style={{borderRadius:'10px'}} >
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
                    <span className='pl-3 pt-1'>  SignIn up with Email</span>
                  
                  </button>
                </div><div className='col-12 mt-4'>
                    <h4>Already have an account?<span style={{color:'green',cursor:'pointer'}} onClick={()=>setCreateAccount(prevDisplay=>!prevDisplay)}>Sign in</span></h4>
                </div>
      </div>
    </div>
  );
}

export default SignUp;
