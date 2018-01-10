export default class Component {
  constructor(store) {
    this._store = store;
    this.render = this.render.bind(this);
  }
}