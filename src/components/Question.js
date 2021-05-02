import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function Question(props) {
  return (
    <Card className="leaderboard-card" variant="outlined">
      <CardMedia
        className="card-media"
        component="img"
        alt={props.author}
        width="150px"
        image={props.userAvatarUrl}
        title={props.author}
      />
      <CardContent>
        <Typography className="question">
          {`${props.author} asks would you rather`}
        </Typography>
        <Typography className="question">{props.optionOne.text}</Typography>
        <Typography className="question">Or</Typography>
        <Typography className="question">{props.optionTwo.text}</Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`question/${props.id}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button fullWidth variant="contained">
            View question
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  optionOne: PropTypes.shape({
    votes: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  optionTwo: PropTypes.shape({
    votes: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  userAvatarUrl: PropTypes.string.isRequired,
};

export default Question;
