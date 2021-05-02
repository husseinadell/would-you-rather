import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";

function Leaderboard({ users }) {
  return (
    <Container style={{ flex: "1 0 auto" }}>
      <Typography variant="h3" style={{ marginTop: "10px" }}>
        Leaderboard
      </Typography>
      {users &&
        Object.keys(users).length &&
        Object.keys(users)
          .map((id) => ({
            ...users[id],
            score:
              users[id].questions.length +
              Object.keys(users[id].answers).length,
          }))
          .sort((a, b) => b.score - a.score)
          .map((user) => (
            <Card key={user.id} className="leaderboard-card">
              <CardMedia
                className="card-media"
                component="img"
                alt={user.name}
                width="150px"
                image={user.avatarURL}
                title={user.name}
              />
              <CardContent>
                <Typography className="question">
                  Answered questions: {Object.keys(user.answers).length}
                </Typography>
                <Typography className="question">
                  Created questions: {user.questions.length}
                </Typography>
                <Typography className="question">
                  Score: {user.score}
                </Typography>
              </CardContent>
            </Card>
          ))}
    </Container>
  );
}

const mapStateToProps = ({ users }) => ({ users });
export default connect(mapStateToProps)(Leaderboard);
