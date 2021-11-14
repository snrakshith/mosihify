import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    position: "sticky",
    top: 0,
    paddingTop: "30px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "600px",
    color: "#550",
  },
  link: {
    fontSize: "20px",
    fontWeight: "600px",
    color: "#555",
  },
});
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={5} style={{ marginBottom: "20px" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/7.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={140} style={{ marginBottom: "20px" }} cols={3}>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/mushroom.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/hats.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/star.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/plant.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body1">
        Sports
      </Link>
      <Link href="#" className={classes.link} variant="body1">
        Movies
      </Link>
      <Divider orientation="vertical" flexItem />
      <Link href="#" className={classes.link} variant="body1">
        Music
      </Link>
      <Link href="#" className={classes.link} variant="body1">
        Life
      </Link>
      <Divider orientation="vertical" flexItem />
      <Link href="#" className={classes.link} variant="body1">
        Money
      </Link>
      <Link href="#" className={classes.link} variant="body1">
        Health
      </Link>
    </Container>
  );
};

export default Rightbar;
