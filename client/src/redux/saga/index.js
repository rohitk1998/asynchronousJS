import { all } from "../../Common/files";
// import { userSaga } from "./user";
import { LastestBlogWatcher } from "./blogs";
import { LatestAuthWatcher } from "./auth"

export function* rootSaga() {
  yield all([LastestBlogWatcher(),LatestAuthWatcher()]);
}
