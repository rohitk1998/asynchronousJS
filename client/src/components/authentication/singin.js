import React from "react";

import { useForm } from "react-hook-form";

const SingIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data,e)=>{
   e.target.reset()
  };
  return (
    <div className = 'container-fluid d-flex align-items-center justify-content-center w-100 vh-100 '>
   <div className='row d-flex justidy-content-space-between w-100 m-5'>
     <div className='col-sm-6 ' style={{paddingLeft:'50px'}}>
     <h1 className="h2_title1">asynchronous</h1>
         <h1 className="h2_title2 " > Javascript</h1>

     </div>
     <div className='col-sm-6 d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-white rounded'>
    <div className='container w-50 '>
    <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-group mt-4">
    <input type="email" class="form-control" name="Email" aria-describedby="emailHelp" placeholder="Enter email" {...register("Email")}/>
  </div>
  <div class="form-group mt-4">
    <input type="password" class="form-control" name="Password" id="exampleInputPassword1" placeholder="Password" {...register("Password")}/>
  </div>
  <div className='col-sm d-flex justify-content-center align-items-center '>

  <button type="submit" class="btn btn-primary mt-4" style={{width:'150px'}}>Submit</button>
  </div>
</form>
    </div>
     </div>
   </div>
    </div>
  )
};

export default SingIn;
