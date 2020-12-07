import { SET_SELECTED_USER } from "./types";
export const setSelectedUser = user => dispatch => {
  dispatch({
    type: SET_SELECTED_USER,
    payload: user
  });
};
