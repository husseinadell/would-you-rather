import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.dispatch(logoutUser());
  };
  render() {
    const navLinks = [
      { title: "Home", path: `/` },
      { title: "Leaderboard", path: `/leaderboard` },
      { title: "Add Question", path: `/add` },
    ];
    const { authedUser, users } = this.props;
    const avatar = authedUser ? users[authedUser].avatarURL : null;

    return (
      <div className="nav-bar">
        <AppBar position="static">
          <Toolbar>
            <Typography className="flex-grow"></Typography>
            <Typography className="flex-grow">
              {navLinks.map(({ title, path }) => (
                <Button key={title} color="inherit">
                  <NavLink to={path} className="nav-link">
                    {title}
                  </NavLink>
                </Button>
              ))}
            </Typography>
            {authedUser && (
              <>
                Hi, {users[authedUser].name}{" "}
                <Avatar
                  alt={authedUser}
                  src={avatar}
                  style={{ marginLeft: "5px" }}
                />
                <Typography className="flex-grow">
                  <Button color="inherit" onClick={this.handleLogout}>
                    Logout
                  </Button>
                </Typography>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(Nav);
