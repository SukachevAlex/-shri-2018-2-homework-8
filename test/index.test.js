import { expect } from 'chai';
import Dispatcher from '../client/src/module/flux/Dispatcher';
import Store from '../client/src/module/flux/Store';

describe('Dispatcher', () => {
  const dispatcher = new Dispatcher;
  describe('Можно зарегистрировать callback', () => {
    const id = dispatcher.register('test');
    it('Вернется корректный id callback' , () => {
      expect(id).to.be.equal(1);
    });
    it('Callback добавится в Dispatcher', () => {
      const callback = dispatcher.getCallbacs();
      expect(callback).to.be.deep.equal({'1': 'test'});
    })
    it('Callback можно удалить из Dispatcher', () => {
      dispatcher.unregister(id);
      const callback = dispatcher.getCallbacs();
      expect(callback).to.be.empty;
    });
  });
});

describe('Store', () => {
  const dispatcher = new Dispatcher;
  const action = {
    addEvent(data) {
      dispatcher.dispatch({
        data,
        type: 'testType'
     });
    }
  };
  let res = 'tt';
  class MyStore extends Store {
    constructor() {
      super();
      dispatcher.register(function(action) {
        switch (action.type) {
            case 'testType':
                res = action.data;
                break;
            default:
                break;
        }
    });
    }
  }
  it('Если вызвать Action, то данные передадутся в Store', () => {
    const store = new MyStore;
    const data = 'testingData';
    action.addEvent(data);
    expect(res).to.be.equal(data);
  });
})