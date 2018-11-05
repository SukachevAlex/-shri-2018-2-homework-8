export default class Dispatcher {
    constructor() {
        this._callbacks = {};
        this._lastId = 1;
    }

    getCallbacs() {
        return this._callbacks;
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
        for (const id of Object.keys(this._callbacks)) {
            this._callbacks[id](payload);
        }
    }
}
