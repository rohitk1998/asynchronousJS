import { combineReducers } from "redux";
import { user } from "./user";
import { blog } from "./blog";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: user,
  blogs: blog,
});
