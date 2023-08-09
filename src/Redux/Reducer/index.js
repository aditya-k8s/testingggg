import { combineReducers } from "redux";
import { reducer, reducer2 } from "./Reducer";
export const rootred = combineReducers({
  reducer,
  reducer2,
});
