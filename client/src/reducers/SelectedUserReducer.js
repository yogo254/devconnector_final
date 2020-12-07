import { SET_SELECTED_USER } from "../actions/types";
let initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_USER:
      return action.payload;
    default:
      return state;
  }
}
