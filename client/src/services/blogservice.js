import { getAsyncResponse } from "./fetch.services";


  const getAllBlogLatest = (body , config) => getAsyncResponse('get' , process.env.REACT_APP_API_BASE_URL_USER , '/posts' , body , config )
  const getPostByID = (body,config) => getAsyncResponse('post' , process.env.REACT_APP_API_BASE_URL_USER , `/getpostbypostid/${body.postid}` , body , config )


  export const userService =  {
    getAllBlogLatest,
    getPostByID
  }