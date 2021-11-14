import { Fab, Snackbar, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "50px",
  },
});

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Add */}
      <Tooltip
        title="Add"
        aria-label="add"
        placement="left"
        arrow
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={4000}
        onClose={() => setOpen(!open)}
      >
        <Alert onClose={() => setOpen(!open)} severity="success">
          Post Successfully Created..
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
