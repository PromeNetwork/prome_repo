const EventEmitter = require('events').EventEmitter;
// const emitter = new EventEmitter();

const EVENT_TYPE = {
  //网络
  ON_LINE_STATUS: 'ON_LINE_STATUS',
  WINDOW_RESIZE: 'WINDOW_RESIZE',
  //事件
  CARD_CLICK: 'CARD_CLICK',
};

export class customEvent {
  constructor() {
    this.emitEvent = new EventEmitter();
  }
  dispatch = (type, data) => {
    this.emitEvent.emit(type, data);
  };
  on = (type, callBack) => {
    if (!Object.prototype.hasOwnProperty.call(EVENT_TYPE, type))
      throw new Error('error event type!');
    this.emitEvent.on(type, callBack);
  };
  once = (type, callBack) => {
    if (!Object.prototype.hasOwnProperty.call(EVENT_TYPE, type))
      throw new Error('error event type!');
    this.emitEvent.once(type, callBack);
  };
  remove = (type) => {
    if (!Object.prototype.hasOwnProperty.call(EVENT_TYPE, type))
      throw new Error('error event type!');
    this.emitEvent.removeAllListeners(type);
  };
}

export default new customEvent();
export { EVENT_TYPE };
