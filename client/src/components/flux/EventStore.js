import Store from '../../module/flux/Store';
import myDispatcher from './MyDispatcher';
import ActionType from './ActionTypes';

class MyStore extends Store {
  constructor() {
    super();
    
    myDispatcher.register(function(action){
      switch(action.type) {
        case ActionType.EVENT_ADD:
          addEvent(action.data);
          break;
        case ActionType.EVENT_TOGGLE:
          toggleEvent(action.id);
          break;
        case ActionType.EVENT_DELETE:
          deleteEvent(action.id);
          break;
        default:
          break;
      }
    });
  }
}

const eventStore = new MyStore;

function deleteEvent(id) {
  console.log(id);
}

export default eventStore;