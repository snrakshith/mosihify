import { Typography, Container } from "@material-ui/core";
import {
  Bookmark,
  CameraAlt,
  ExitToApp,
  Home,
  List,
  Person,
  PhoneAndroid,
  PlayCircleOutline,
  Settings,
  Storefront,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    position: "sticky",
    top: 0,
    paddingTop: "30px",
    // backgroundColor: "green",
  },
  item: {
    display: "flex",
    alignItems: "center",
    // width: "100%",
    marginBottom: "30px",
  },
  icon: {
    marginRight: "5px",
    fontSize: "25px",
    color: "#555",
  },
  text: {
    fontSize: "20px",
    color: "#555",
  },
});
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAlt className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <PhoneAndroid className={classes.icon} />
        <Typography className={classes.text}>App</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />

        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
