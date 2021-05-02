import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";
import { connect } from "react-redux";
import { loginUser } from "../actions/authedUser";

import { Avatar, Button, FormControl } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

class Login extends Component {
  state = {
    userId: "",
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state.userId));
    const state = this.props.location.state;
    if (state?.from?.pathname) {
      this.props.history.push(state.from.pathname);
    } else {
      this.props.history.push("/");
    }
  };

  onChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  render() {
    if (this.props.authedUser) {
      return <Redirect to="/" />;
    }
    const { users } = this.props;
    const { userId } = this.state;
    const avatarURL = userId
      ? users.find((el) => el.id === userId).avatarURL
      : null;

    return (
      <Card className="card">
        <CardContent className="center">
          <h2 className="center">Choose player</h2>
          <Avatar
            src={avatarURL}
            alt={`Avatar for ${userId}`}
            className="center-avatar"
          />
          <FormControl style={{ minWidth: 120 }}>
            <InputLabel id="select-user-label">Player Name</InputLabel>
            <Select
              labelId="select-user-label"
              id="select-user"
              value={userId}
              onChange={this.onChange}
              className="min-width"
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
        <CardActions className="center-btn">
          <Button
            disabled={!userId}
            color="primary"
            variant="contained"
            size="large"
            onClick={this.handleClick}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return { users: Object.values(users) };
}
export default withRouter(connect(mapStateToProps)(Login));
