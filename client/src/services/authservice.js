import { getAsyncResponse } from "./fetch.services";
import axios from "axios";

console.log(process.env);

const headers = {
  "Content-Type": "application/json",
};

export const postUser = async (body, config) => {
  console.log("body,config", body, config);
  body.device_token = "100"
  body.device_type = "web"
 return getAsyncResponse("post", process.env.REACT_APP_API_BASE_URL_USER , '/register', body,config)
};
