import React, { Component } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

export class QuestionDialog extends Component {
  state = {
    answer: "",
  };

  handleValueChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { answer } = this.state;
    const {
      question: { id },
      dispatch,
    } = this.props;
    dispatch(handleAnswerQuestion(id, answer));
  };
  render() {
    const { question } = this.props;
    const { answer } = this.state;
    return (
      <Container>
        <Card className="leaderboard-card">
          <CardMedia
            className="card-media-answer"
            component="img"
            alt={question.author}
            image={question.avatarURL}
            title={question.author}
          />
          <CardContent style={{ width: "100%" }}>
            <Box style={{ marginBottom: "30px" }}>
              <Typography variant="h5">{`${question.author} asks`}</Typography>
              <Typography className="center">Would you rather...</Typography>
            </Box>
            <Box>
              <RadioGroup value={answer} onChange={this.handleValueChange}>
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={question.optionOne.text}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={question.optionTwo.text}
                />
              </RadioGroup>
              <Button
                disabled={!answer}
                color="primary"
                variant="contained"
                size="large"
                style={{ marginTop: "35px" }}
                onClick={this.handleSubmit}
                fullWidth
              >
                Answer
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default connect()(QuestionDialog);
