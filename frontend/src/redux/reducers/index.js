//REDUCERS
import * as ct from "../constants";
const initialState = {}
const rootReducer = (state = initialState, action) => {
  if (action.type === ct.SET_USERS) {
    return {
      ...state,
      users: action.data
    };
  }
    if (action.type === ct.SET_NOTES) {
      return {
        ...state,
        notes: action.data
      };
    }
  return state;
};

export default rootReducer;
