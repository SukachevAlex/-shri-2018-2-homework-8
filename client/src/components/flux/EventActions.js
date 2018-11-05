import Dispatcher from '../flux/MyDispatcher';
import ActionTypes from './ActionTypes';

const Actions = {
  addEvent(data) {
    Dispatcher.dispatch({
      data,
      type: ActionTypes.EVENT_ADD
    });
  },

  toggleEvent(id) {
    Dispatcher.dispatch({
      id,
      type: ActionTypes.EVENT_TOGGLE
    });
  },

  deleteEvent(id) {
    Dispatcher.dispatch({
      id,
      type: ActionTypes.EVENT_DELETE
    });
  },

  loadEvent(data) {
    Dispatcher.dispatch({
      data,
      type: ActionTypes.EVENT_LOAD
    });
  }
}

export default Actions;