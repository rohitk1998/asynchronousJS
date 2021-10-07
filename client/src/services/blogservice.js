import { getAsyncResponse } from "./fetch.services"


  const getAllBlogLatest = (body , config) => getAsyncResponse('get' , 'http://localhost:4000' , '/posts' , body , config )


  export const userService =  {
    getAllBlogLatest
  }