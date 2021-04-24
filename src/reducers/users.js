import { RECEIVE_USERS, ANSWER_QUESTION } from "../actions/users";
import { ADD_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      return {
        ...state,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
