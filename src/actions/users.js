export const RECEIVE_USERS = "RECEIVE_USERS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function answerQuestion({ questionId, answer }) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    answer,
  };
}
