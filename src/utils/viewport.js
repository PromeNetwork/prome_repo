/**动态设置viewport */
function isMobile() {
  let userAgentInfo = navigator.userAgent;
  let Agents = [
    'phone',
    'pad',
    'pod',
    'iPhone',
    'iPod',
    'ios',
    'iPad',
    'Android',
    'Mobile',
    'BlackBerry',
    'IEMobile',
    'MQQBrowser',
    'JUC',
    'Fennec',
    'wOSBrowser',
    'BrowserNG',
    'WebOS',
    'Symbian',
    'Windows Phone',
  ];
  let getArr = Agents.filter((i) => userAgentInfo.includes(i));
  return getArr.length ? true : false;
}

(function () {
  function detectZoom() {
    var ratio = 0,
      screen = window.screen,
      ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
      }
    } else if (
      window.outerWidth !== undefined &&
      window.innerWidth !== undefined
    ) {
      ratio = window.outerWidth / window.innerWidth;
    }
    if (ratio) {
      ratio = Math.round(ratio * 100);
    }
    return ratio / 100;
  }

  function removeMeta() {
    const metas = Array.from(document.getElementsByTagName('meta'));
    metas.forEach((item) => {
      if (
        item.getAttribute('name') &&
        item.getAttribute('name') === 'viewport'
      ) {
        item.remove();
      }
    });
  }

  //获取设备像素比
  let set = function () {
    removeMeta();
    const ifMoblie = isMobile();
    const classList = document.getElementById('app').classList;
    if (ifMoblie) {
      if (!classList.contains('mobile-port')) {
        classList.add('mobile-port');
      }
    } else {
      classList.remove('mobile-port');
    }
    let scale = detectZoom(); //当前尺寸/目标尺寸
    if (ifMoblie) {
      scale = 1;
      let meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content =
        'user-scalable=no,initial-scale=' +
        scale +
        ',minimum-scale=' +
        scale +
        ',maximum-scale=' +
        scale +
        '';
      document.head.appendChild(meta);
    } else {
      let meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content =
        'width=device-width,shrink-to-fit=no, viewport-fit=cover,initial-scale=' +
        1 +
        ',minimum-scale=' +
        1 +
        ',maximum-scale=' +
        1 +
        '';
      document.head.appendChild(meta);
      // document.body.style.zoom = scale;
    }
  };
  set();

  window.addEventListener('resize', set);
})();
