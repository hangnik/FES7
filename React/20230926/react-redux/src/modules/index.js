import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from "redux";

// reducer들을 합침
const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});

export default rootReducer;
