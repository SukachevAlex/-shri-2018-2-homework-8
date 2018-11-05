export default class Store {

    emitEvent(event) {
        document.dispatchEvent(new CustomEvent(event));
    }

    addEventListener(event, callback) {
        document.addEventListener(event, callback);
    }
}
