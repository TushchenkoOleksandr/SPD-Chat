import { makeAutoObservable } from "mobx";

class Messages {
  messages = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(obj) {
    this.messages = [
      ...this.messages,
      { id: Math.random(), message: obj.text, author: obj.author},
    ];
  }

  removeHr() {
    this.messages = this.messages.filter(message => message.author !== 'hr')
  }
}

export default new Messages();
