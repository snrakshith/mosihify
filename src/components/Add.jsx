import {
  Button,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
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
      {/* Modal */}
      <Modal
      // open={open}
      // onClose={handleClose}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
      >
        <form className={classes.form} noValidate autoComplete="off">
          {/* Text Components */}
          <TextField label="Title" />
          {/* Multiline Text Components */}
          <TextField
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="outlined"
          />
          {/* Select Components */}
          <TextField
            select
            label="Visibility"
            helperText="Please select your currency"
          >
            <MenuItem>Public</MenuItem>
            <MenuItem>Private</MenuItem>
            <MenuItem>Unlisted</MenuItem>
          </TextField>
          {/* Radio */}
          <FormLabel component="legend">Who can comment ?</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            // value={value}
            // onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Everybody"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Friends"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Nobody"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="Custom (Premium)"
            />
          </RadioGroup>
          {/* Button */}
          <Button variant="outlined" color="primary">
            Create
          </Button>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
        </form>
      </Modal>
      {/* Notification */}
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
