import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Mail, Notifications, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    borderRadius: "20px",
  },
  input: {
    color: "white",
  },
  badge: {
    marginRight: "25px",
  },
  icon: {
    display: "flex",
    alignItems: "center",
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">cSchool</Typography>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        <div className={classes.icon}>
          <Badge badgeContent={5} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://v4.mui.com/static/images/avatar/1.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
