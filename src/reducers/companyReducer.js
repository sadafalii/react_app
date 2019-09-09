import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function authorReducer(state = initialState.company,action) {
  switch (action.type) {
    case types.LOAD_COMPANY_SUCCESS:
      return action.company;
    default:
      return state;
  }
}
