import React from "react";
import { CreateMessageBox } from "./CreateMessageBox/CreateMessageBox";
import { MessagesBox } from "./MessagesBox/MessagesBox";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const Chat = () => {
  return (
    <StyledGrid>
      <MessagesBox />
      <CreateMessageBox />
    </StyledGrid>
  );
};

const StyledGrid = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2%",
    width: "70vw",
    height: "90vh",
    background: "whitesmoke",
    borderRadius: "1%",
  },
})(Grid);
