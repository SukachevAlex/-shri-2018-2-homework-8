import Dispatcher from '../../module/flux/Dispatcher';

class MyDispatcher extends Dispatcher {
  constructor() {
    super();
  }
}

const dispatcher = new MyDispatcher();

export default dispatcher;