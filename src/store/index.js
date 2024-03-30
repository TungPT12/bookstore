import { combineReducers } from "redux";

import cart from "./reducers/cart";
import auth from "./reducers/auth"
export const allReducers = combineReducers({
  cart,
  auth,
  // add more reducers here
});