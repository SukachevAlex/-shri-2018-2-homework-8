export default class Dispatcher {
  _callbacks;
  _lastId;

  constructor() {
    this._callbacks = {};
    this._lastId = 1;
  }

  register(callback) {
    const id = this._lastId++;
    this._callbacks[id] = callback;

    return id;
  }

  unregister(id) {
    delete this._callbacks[id];
  }

  dispatch(payload) {
    for (let i = 0; i < this._callbacks.length; i++) {
      this._callbacks[i](payload);
    }
  }
}
