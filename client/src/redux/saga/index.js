import { all } from "../../Common/files";
// import { userSaga } from "./user";
import { LastestBlogWatcher } from "./blogs";

export function* rootSaga() {
  yield all([LastestBlogWatcher()]);
}
