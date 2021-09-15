import React, { useEffect, useRef } from "react";
import { Message } from "./Message/Message";
import messages from "../../../store/messages";
import author from "../../../store/author";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const MessagesBox = observer(() => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    autorun(() => {
      scrollToBottom();
    });
  });

  return (
    <StyledGrid>
      {messages.messages.map((message) => {
        return message.author === "hr" ? (
          <hr key={message.id} />
        ) : (
          <Message
            message={message.message}
            avatar={message.author[0].toUpperCase()}
            classname={
              message.author === author.author
                ? "right"
                : "left"
            }
            key={message.id}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </StyledGrid>
  );
});

const StyledGrid = withStyles({
  root: {
    height: "calc(100% - 120px)",
    backgroundColor: "rgb(111, 11, 168)",
    borderRadius: "20px",
    overflow: "scroll",
  },
})(Grid);
