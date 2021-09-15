import { Button, Grid, Input, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import author from "../../store/author";

export const Login = () => {
  const [name, setName] = useState("");

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <StyledInput
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <StyledButton onClick={() => author.changeAuthor(name)}>
        send
      </StyledButton>
    </Grid>
  );
};

const StyledButton = withStyles({
  root: {
    background: "rgb(255, 213, 27)",
    borderRadius: 10,
    color: "black",
    height: 38,
    margin: "0 0 0 10px",
    '&:hover': {
        backgroundColor: 'rgb(172, 141, 2)',
      }
  },
  label: {
    textTransform: "capitalize",
  },

})(Button);

const StyledInput = withStyles({
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    border: "none",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
  },
})(Input);
