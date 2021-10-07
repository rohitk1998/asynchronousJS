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
  console.log("action" , action )
  try{
    const response =   yield call(userService.getAllBlogLatest , action.payload , null )
    console.log(response.data)
      yield put({type : blogTypes.ALL_POSTS , payload : response.data } )
  }
  catch(error){
      console.log("err" , error)
  }
}

export const  LastestBlogWatcher = function* (){
    yield takeLatest(blogTypes.FETCH_POSTS, getLatestBlogs)
}

