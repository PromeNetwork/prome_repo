// 1.引入的scrollReveal组件
import scrollReveal from 'scrollreveal';
const sr = scrollReveal();
/* 
@el [element|elementList]添加动画的元素 
    - element元素，如: #el1 -> id为item1的元素
    - elementList 元素列表，如: .item1 -> 所有class为item1的元素 
*/

// 动画默认配置
const config = {
  // 动画的时长
  duration: 400,

  // 延迟时间
  delay: 30,

  // 动画开始的位置，'bottom', 'left', 'top', 'right'
  origin: 'bottom',

  // 回滚的时是否再次触发动画
  reset: true,

  // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
  // useDelay: 'always',

  // 在移动端是否使用动画
  mobile: true,

  // 初始距离视图的位置，单位：%，rem等，例：50% 10px 1rem
  distance: '10px',

  // 初始透明度 -> 0-1
  opacity: 0.5,

  container: '#app',

  // 执行速度 线性函数啥的
  //  例：cubic-bezier(0.5, 0, 0, 1)|ease-in-out|ease-in|ease
  easing: 'ease-in-out',

  // 旋转的xyz参数 酷炫的样式主要修改此参数
  //   rotate: { x: 45, y: 45, z: -45 },
  // 执行方式（缩放）-> 0-1
  //   scale: 1,
};

const scrRev = (el, srConfig = config) => {
  sr.reveal(el, { ...config, ...srConfig });
};
// window.scrollReveal = new scrollReveal(config);
// 导出
export default scrRev;
