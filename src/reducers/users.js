import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      const author = action.question.author;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([action.question.id]),
        },
      };
    case ANSWER_QUESTION:
      const { authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [action.id]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
