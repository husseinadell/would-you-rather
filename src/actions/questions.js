import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const questionData = {
      optionOneText,
      optionTwoText,
      authedUser,
    };
    return saveQuestion(questionData).then((question) => {
      dispatch(addQuestion(question));
    });
  };
}

export function handleAnswerQuestion(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const answerInfo = {
      authedUser,
      qid: questionId,
      answer,
    };
    return saveQuestionAnswer(answerInfo).then(() => {
      dispatch(answerQuestion(authedUser, questionId, answer));
    });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function answerQuestion(authedUser, questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    questionId,
    answer,
  };
}
