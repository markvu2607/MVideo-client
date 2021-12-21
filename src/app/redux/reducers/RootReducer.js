import { combineReducers } from "redux";
import PlayListReducer from "./PlayListReducer";

const RootReducer = combineReducers({
  playList: PlayListReducer
})

export default RootReducer