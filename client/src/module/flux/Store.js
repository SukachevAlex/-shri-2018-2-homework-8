export default class Store {

  emitEvent(event) {
    console.log(event);
    document.dispatchEvent(new CustomEvent(event));
  }
  
  addEventListener(event, callback) {
    document.addEventListener(event, callback)
  }
}
