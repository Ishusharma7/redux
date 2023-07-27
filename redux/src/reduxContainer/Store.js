import { combineReducers, createStore } from "redux";
import Bookreducer from "./Bookreducer";

// const reducer = combineReducers({
//   Book: Bookreducer,
//   Pen: Bookreducer
// });
const store = createStore(Bookreducer);
export default store;
