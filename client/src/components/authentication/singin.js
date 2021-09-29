const SingIn = () => {
  return <div className="container-fluid d-flex justify-content-center align-items-center w-100 vh-100 ">
      <div className="row d-flex justify-content-space-between w-100 ">
         <div className="col-sm m-5">
         <h1 className="h2_title1">asynchronous</h1>
         <h1 className="h2_title2"> Javascript</h1>
         </div>
         <div className="col-sm m-5" >
            <div className="container login-container d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-white rounded">
            <form style={{padding:'2rem'}}>
  <div class="form-group mt-4">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group mt-4">
    <input type="password" class="form-control w-300" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary mt-4" s>Submit</button>
</form>            </div>
         </div>
      </div>
  </div>;
};

export default SingIn;
