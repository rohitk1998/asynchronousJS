import axios from "axios";


export const getAsyncResponse = (
  method,
  url,
  endpoint,
  body,
  headers
) => {  
  console.log(
    method,
    url,
    endpoint,
    body,
    headers
  );
return new Promise((resolve,reject)=>{
  return asyncFetch(method , url , endpoint , body , headers )
    .then((res) => asyncResponseHandler(res , resolve))
    .catch((error) => errorHandler(error , reject))
})

};

async function asyncFetch(method , url , endpoint , body = null , headers = { "Content-type": "application/json; charset=UTF-8" }){
     
     if(method !== '' && endpoint !== '') {
          return await axios[method](url + endpoint, body , {headers})     
     }
}


function asyncResponseHandler(res , resolve){
  return resolve(res)
}

function errorHandler(error , reject){
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

