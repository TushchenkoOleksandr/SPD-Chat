import React, { useEffect, useState } from "react";
import messages from "../../../store/messages";
import io from "socket.io-client";
import author from "../../../store/author";
import isActive from "../../../store/isActive";
import { observer } from "mobx-react-lite";
import { Button, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const CreateMessageBox = observer(() => {
  const SERVER_URL = "http://localhost:4000";
  const socket = io(SERVER_URL);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) {
      socket.emit("chat message", { text: message, author: author.author });
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("chat message", function (obj) {
      if (obj.author !== author.author) {
        isActive.setActive(false);
      }

      if (
        isActive.isActive.active === false &&
        isActive.isActive.newMessageHr === false
      ) {
        messages.addMessage({ text: null, author: "hr" });
        isActive.setHr(true);
      }
      messages.addMessage(obj);
    });
  }, []);

  return (
    <StyledGrid>
      <StyledTextField
        variant="outlined"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <StyledButton onClick={() => sendMessage()} className="send-btn">
        Send
      </StyledButton>
    </StyledGrid>
  );
});

const StyledGrid = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "100px",
    background: "rgb(111, 11, 168)",
    borderRadius: "20px",
  },
})(Grid);

const StyledTextField = withStyles({
  root: {
    width: "80%",
    height: "50%",
    background: 'white',
    borderRadius: "10px",
    outline: "none",
  },
})(TextField);

const StyledButton = withStyles({
  root: {
    paddingLeft: "20px",
    paddingRight: "20px",
    height: 48,
    background: "rgb(255, 213, 27)",
    borderRadius: "10px",
    color: "black",
    "&:hover": {
      background: "rgb(172, 141, 2)",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);
