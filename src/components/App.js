import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <BrowserRouter>
        <>
          <Nav />
          <Switch>
            <PrivateRoute
              authedUser={authedUser}
              path="/"
              exact
              component={Dashboard}
            />
            <PrivateRoute
              authedUser={authedUser}
              path="/leaderboard"
              component={Leaderboard}
            />
            <PrivateRoute
              authedUser={authedUser}
              path="/new"
              component={NewQuestion}
            />
            <PrivateRoute
              authedUser={authedUser}
              path="/question/:id"
              component={QuestionPage}
            />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar,
  };
}

export default connect(mapStateToProps)(App);
