import { combineReducers } from "redux";
import PlayListReducer from "./PlayListReducer";

const RootReducer = combineReducers({
  playlist: PlayListReducer
})

export default RootReducer