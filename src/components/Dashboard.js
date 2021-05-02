import React, { Component } from "react";
import { Tabs, Tab, Container, Typography } from "@material-ui/core";
import TabPanel from "./TabPanel";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  state = {
    tabId: 0,
  };

  handleChange = (_, newValue) => {
    this.setState({ tabId: newValue });
  };

  fromatQuestions = (questionIds) =>
    questionIds
      .map((questionId) => ({
        ...this.props.questions[questionId],
        userAvatarUrl: this.props.users[this.props.questions[questionId].author]
          .avatarURL,
      }))
      .sort((a, b) => b.timestamp - a.timestamp);

  render() {
    const { tabId } = this.state;
    const { questions, authedUser } = this.props;
    const answerdQuestions = Object.keys(questions).filter(
      (questionId) =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)
    );
    const unAnswerdQuestions = Object.keys(questions).filter(
      (questionId) =>
        !questions[questionId].optionOne.votes.includes(authedUser) &&
        !questions[questionId].optionTwo.votes.includes(authedUser)
    );

    return (
      <Container>
        <Typography variant="h3" style={{ marginTop: "10px" }}>
          Dashboard
        </Typography>
        <Tabs
          value={tabId}
          onChange={this.handleChange}
          aria-label="answers tabs"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label={`Unanswerd questions ${unAnswerdQuestions.length}`} />
          <Tab label={`Answerd questions ${answerdQuestions.length}`} />
        </Tabs>
        <TabPanel value={tabId} index={0}>
          {unAnswerdQuestions &&
            this.fromatQuestions(unAnswerdQuestions).map((question) => (
              <Question key={question.id} {...question} />
            ))}
        </TabPanel>
        <TabPanel value={tabId} index={1}>
          {answerdQuestions &&
            this.fromatQuestions(answerdQuestions).map((question) => (
              <Question key={question.id} {...question} />
            ))}
        </TabPanel>
      </Container>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  users,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(Dashboard);
