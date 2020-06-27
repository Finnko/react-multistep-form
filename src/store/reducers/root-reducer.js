import {combineReducers} from "redux";
import appReducer from "./app/app-reducer";
import NameSpace from "../name-space";

export const rootReducer = combineReducers({
  [NameSpace.APP]: appReducer,
});
