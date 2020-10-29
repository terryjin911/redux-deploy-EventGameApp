import { combineReducers } from "redux";

import entry from "./entry";

//entry를 끄집어오는 코드를 작성
const rootReducer = combineReducers({
  entry,
});
export default rootReducer;
