import { Grid, withStyles } from "@material-ui/core";
import React from "react";

export const Message = (props) => {
  return props.classname === "right" ? (
    <MessageBoxRight>
      <AvatarBox>
        <span style={{ fontSize: "20px" }}>{props.avatar}</span>
      </AvatarBox>
      <TextBox>{props.message}</TextBox>
    </MessageBoxRight>
  ) : (
    <MessageBox>
      <AvatarBox>
        <span style={{ fontSize: "20px" }}>{props.avatar}</span>
      </AvatarBox>
      <TextBox>{props.message}</TextBox>
    </MessageBox>
  );
};

const MessageBox = withStyles({
  root: {
    display: "flex",
    justifyContent: "left",
    margin: "10px",
    padding: "10px",
  },
})(Grid);

const MessageBoxRight = withStyles({
  root: {
    flexDirection: "row-reverse",
    justifyContent: "end",
  },
})(MessageBox);

const AvatarBox = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "50px",
    maxWidth: "50px",
    height: "50px",
    backgroundColor: "#fff",
    border: "1px solid #000000",
    borderRadius: "50%",
  },
})(Grid);

const TextBox = withStyles({
  root: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginRight: "10px",
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    wordWrap: "break-all",
  },
})(Grid);
