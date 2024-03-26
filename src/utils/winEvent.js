/* eslint-disable no-unused-vars */
import customEvent, { EVENT_TYPE } from '@/utils/emitEvent';

function orientationChange() {
  if (window.orientation == 180 || window.orientation == 0) {
    console.log('竖屏');
  }
  if (window.orientation == 90 || window.orientation == -90) {
    console.log('横屏');
  }
}
function onResize(e) {
  customEvent.dispatch(EVENT_TYPE.WINDOW_RESIZE, e);
}
function onListener() {
  window.addEventListener('orientationchange', orientationChange);
  window.addEventListener('resize', onResize);
}

function removeListener() {
  window.removeEventListener('orientationchange', orientationChange);
}

onListener();
