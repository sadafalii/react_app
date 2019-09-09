import {combineReducers} from "redux";
import Add from './addDataReducers';
import company from './companyReducer';

const rootReducer=combineReducers({
  Add,
  company
});

export default rootReducer;
