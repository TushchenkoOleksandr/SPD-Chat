import React from "react";
import { Chat } from "./Chat/Chat";
import { Login } from "./Login/Login";
import { observer } from "mobx-react-lite";
import author from "../store/author";
import isActive from "../store/isActive";
import messages from "../store/messages";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const App = observer(() => {
  return (
    <StyledGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
      onClick={() => {
        isActive.setActive(true);
        isActive.setHr(false);
        messages.removeHr();
      }}
    >
      {author.author ? <Chat /> : <Login />}
    </StyledGrid>
  );
});

const StyledGrid = withStyles({
  root: {
    background: "grey",
  }
})(Grid);
