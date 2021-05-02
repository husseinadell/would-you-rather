import React, { Component } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { withRouter } from "react-router";

class NewQuestion extends Component {
  state = {
    firstOption: "",
    secondOption: "",
  };

  handleValueChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddQuestion = (e) => {
    e.preventDefault();
    const {
      firstOption: optionOneText,
      secondOption: optionTwoText,
    } = this.state;
    const { dispatch, history } = this.props;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    history.push("/");
  };

  render() {
    const { firstOption, secondOption } = this.state;
    return (
      <Container>
        <Typography variant="h3" style={{ marginTop: "10px" }}>
          Add new qestion
        </Typography>
        <h2 className="center">Would you rather...</h2>
        <TextField
          name="firstOption"
          label="Option 1"
          onChange={this.handleValueChange}
          value={firstOption}
          fullWidth
        />
        <Typography className="center" style={{ margin: "25px" }}>
          Or
        </Typography>
        <TextField
          name="secondOption"
          label="Option 2"
          onChange={this.handleValueChange}
          value={secondOption}
          autoComplete=""
          fullWidth
        />
        <Button
          disabled={!firstOption || !secondOption}
          color="primary"
          variant="contained"
          size="large"
          onClick={this.handleAddQuestion}
          style={{ marginTop: "35px" }}
          fullWidth
        >
          Add question
        </Button>
      </Container>
    );
  }
}

export default connect()(withRouter(NewQuestion));
