import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>{/* Routes Goes here! */} hii</div>
        </div>
      </BrowserRouter>
    );
  }
}

// function mapStateToProps({ authedUser }) {
//   return {
//     loading: authedUser === null,
//   };
// }

export default connect()(App);
