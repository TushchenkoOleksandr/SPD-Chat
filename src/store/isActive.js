import { makeAutoObservable } from "mobx";

class IsActive {
  isActive = {
    active: true,
    newMessageHr: false
  }

  constructor() {
    makeAutoObservable(this);
  }

  setActive(active) {
    this.isActive = {...this.isActive, active: active};
  }
  setHr(active) {
    this.isActive = {...this.isActive, newMessageHr: active};
  }
}

export default new IsActive();