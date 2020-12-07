import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";
import mode from "./SetModeReducer";
import selectedUser from "./SelectedUserReducer";
import alert from "./alert";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  mode,
  selectedUser,
  alert
});
