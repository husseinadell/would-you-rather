import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import QuestionAnswer from "./QuestionAnswer";
import QuestionDialog from "./QuestionDialog";

function QuestionPage(props) {
  const { users, questions, authedUser } = props;
  const id = props.match.params.id;
  const question = questions[id];

  if (!question) {
    return <Redirect to="/404" />;
  }
  question.avatarURL = users[question.author].avatarURL;
  question.currentUser = authedUser;

  const isAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return isAnswered ? (
    <QuestionAnswer question={question} />
  ) : (
    <QuestionDialog question={question} />
  );
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  users,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(withRouter(QuestionPage));
