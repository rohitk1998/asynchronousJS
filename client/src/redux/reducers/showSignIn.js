import { SHOW_SIGNIN_POPUP } from "../actioncreator/types";

const initialState = {
  state: false,
};

export default function showsigninReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SIGNIN_POPUP:
      return {
        ...state,
        state: !state.state,
      };

    default:
      return state;
  }
}
