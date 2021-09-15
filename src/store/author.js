import { makeAutoObservable } from "mobx";

class Author {
  author = ''

  constructor() {
    makeAutoObservable(this);
  }

  changeAuthor(author) {
    this.author = author;
  }
}

export default new Author();