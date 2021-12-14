import { getAsyncResponse } from "./fetch.services"


  const getAllBlogLatest = (body , config) => getAsyncResponse('get' , 'http://localhost:4000' , '/posts' , body , config )
  const getPostByID = (body,config) => getAsyncResponse('post' , 'http://localhost:4000' , `/getpostbypostid/${body.postid}` , body , config )



  export const userService =  {
    getAllBlogLatest,
    getPostByID
  }