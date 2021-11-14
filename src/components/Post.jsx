import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import React from "react";

const useStyles = makeStyles({
  card: {
    marginBottom: "30px",
  },
  media: {
    height: "250px",
  },
});

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
          alt="Contemplative Reptile"
          title="Breakfast"
          className={classes.media}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Happy
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse
            quia repellat iure recusandae tenetur sunt, tempore fugit
            blanditiis! Obcaecati fugit quia perferendis odit nemo eos quidem
            nulla saepe nostrum.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse
            quia repellat iure recusandae tenetur sunt, tempore fugit
            blanditiis! Obcaecati fugit quia perferendis odit nemo eos quidem
            nulla saepe nostrum.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">Share</Button>
        <Button color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
