import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography,
  Badge,
  Divider,
} from "@material-ui/core";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const QuestionAnswer = (props) => {
  const {
    author,
    avatarURL,
    currentUser,
    optionOne,
    optionTwo,
  } = props.question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercentage =
    Math.round((optionOne.votes.length / totalVotes) * 10000) / 100;
  const optionTwoPercentage =
    Math.round((optionTwo.votes.length / totalVotes) * 10000) / 100;
  return (
    <Container>
      <Card className="leaderboard-card">
        <CardMedia
          className="card-media-answer"
          component="img"
          alt={author}
          image={avatarURL}
          title={author}
        />
        <CardContent style={{ width: "100%" }}>
          <Box style={{ marginBottom: "30px" }}>
            <Typography variant="h5">{`${author} asks`}</Typography>
            <Typography>Would you rather...</Typography>
          </Box>
          <Box>
            <Badge
              color="secondary"
              badgeContent="answered"
              className="pagde"
              invisible={!optionOne.votes.includes(currentUser)}
            >
              <Typography>{optionOne.text}</Typography>
            </Badge>
            <LinearProgressWithLabel value={optionOnePercentage} />
          </Box>
          <Divider variant="fullWidth" />
          <Box style={{ marginTop: "20px" }}>
            <Badge
              color="secondary"
              badgeContent="answered"
              className="pagde"
              invisible={!optionTwo.votes.includes(currentUser)}
            >
              <Typography>{optionTwo.text}</Typography>
            </Badge>
            <LinearProgressWithLabel value={optionTwoPercentage} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default QuestionAnswer;
