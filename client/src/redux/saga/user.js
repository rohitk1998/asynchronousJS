// import {
//   all,
//   call,
//   put,
//   takeEvery,
//   takeLatest,
//   take,
//   getAsyncResponse,
// } from "../../Common/files";
// import { userTypes } from "../actions/actiontypes";

// function* ShowMenu() {
//   yield put({ type: userTypes.SHOW_HIDE_MENU });
// }

// function* ShowSignInPopup() {
//   yield put({ type: userTypes.SHOW_SIGNIN_POPUP });
// }

// export const  userSaga = function* (){
//   yield takeEvery(userTypes.SHOW_SIGNIN_POPUP, ShowSignInPopup);
//   yield takeEvery(userTypes.SHOW_HIDE_MENU , ShowMenu)
// }
