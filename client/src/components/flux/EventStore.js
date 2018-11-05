import Store from '../../module/flux/Store';
import myDispatcher from './MyDispatcher';
import ActionType from './ActionTypes';
import { generateEvents } from '../Event/Event';

class MyStore extends Store {

    constructor() {
        super();

        myDispatcher.register(function(action) {
            switch (action.type) {
                case ActionType.EVENT_ADD:
                    addEvent(action.data);
                    break;
                case ActionType.EVENT_TOGGLE:
                    toggleEvent(action.id);
                    break;
                case ActionType.EVENT_DELETE:
                    deleteEvent(action.id);
                    break;
                case ActionType.EVENT_LOAD:
                    loadEvent(action.data);
                    break;

                default:
                    break;
            }
        });
    }
}

const eventStore = new MyStore();

function toggleEvent(id) {
    console.log(`toggle ${id} element`);
}

function deleteEvent(id) {
    const el = document.querySelector(`.event__icon_${id}`);
    const event = el.closest('.event__item');
    event.remove();

    console.log(`delete ${id} element`);
}

function loadEvent(data) {
    if (supportsTemplate) {
        data.forEach(el => generateEvents(el));
    } else {
        console.log('error');
    }
}

function supportsTemplate() {
    return 'content' in document.createElement('template');
}

export default eventStore;
