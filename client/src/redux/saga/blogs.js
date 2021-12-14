import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  take,
} from "../../Common/files";
import { userService } from "../../services/blogservice"
import { blogTypes } from "../actions/actiontypes";


function* getLatestBlogs(action){
  try{
    const response =   yield call(userService.getAllBlogLatest , action.payload , null )
      yield put({type : blogTypes.ALL_POSTS , payload : response.data } )
  }
  catch(error){
      console.log("err" , error)
  }
}

function* getPostByIDFn(action){
  try{
    const response =   yield call(userService.getPostByID , action.payload , null )
      yield put({type : blogTypes.SAVE_POST_DETAILS , payload : response.data } )
  }
  catch(error){
      console.log("err" , error)
  }
}

export const  LastestBlogWatcher = function* (){
    yield takeLatest(blogTypes.FETCH_POSTS, getLatestBlogs);
    yield takeLatest(blogTypes.GET_POST_BY_POST_ID, getPostByIDFn)

}

