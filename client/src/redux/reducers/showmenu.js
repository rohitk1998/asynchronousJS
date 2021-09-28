import { SHOW_HIDE_MENU } from "../actioncreator/types";

const initialState = {
  state: false,
};

export default function showmenuReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_HIDE_MENU:
      return {
        ...state,
        state: !state.state,
      };

    default:
      return state;
  }
}
