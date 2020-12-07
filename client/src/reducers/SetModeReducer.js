import { SET_MODE } from "../actions/types";
let initialState = false;
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODE:
      return !state;
    default:
      return state;
  }
}
