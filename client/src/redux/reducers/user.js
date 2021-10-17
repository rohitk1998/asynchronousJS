import { userTypes } from "../actions/actiontypes";

const initialState = {
  menustate: false,
  signupstate : false 
};

export function user(state = initialState, action) {
  switch (action.type) {
    case userTypes.SHOW_HIDE_MENU:
      return {
        ...state,
        menustate: !state.menustate,
      };
      case userTypes.SHOW_SIGNIN_POPUP :
        return {
          ...state,
          signupstate: !state.signupstate,
        };
        default:
            return state;
}
}