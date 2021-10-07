import axios from "axios";


export const getAsyncResponse = (
  method,
  url,
  params,
  body,
  headers
) => {  
return new Promise((resolve,reject)=>{

  console.log("s")
    
  return asyncFetch(method , url , params , body , headers )
    .then((res) => asyncResponseHandler(res , resolve))
    .catch((error) => errorHandler(error , reject))
})

};

async function asyncFetch(method , url , params , body = null , headers = { "Content-type": "application/json; charset=UTF-8" }){
     
     if(method !== '' && params !== '') {
       console.log(method , params , url , body , headers )
          return await axios[method](url + params  , {headers} , {body})     
     }
}


function asyncResponseHandler(res , resolve){
  console.log("res" , res)
  return resolve(res)
}

function errorHandler(error , reject){
     console.log(error)
     if(!error){
       console.log("no error")
     }
     else if(error.status !==  200){
       return "something went wrong !!"
     }
     else{
       return reject(reject)
     }
}

