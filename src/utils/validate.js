/**
 * 数据验证函数类，用于部分格式数据的验证
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

/**
 * @param {string} source 原字符串
 * @returns {number} start 要截取的位置
 * @returns {string} newStr插入字符
 */
export function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + '.webp';
  // return source.slice(0, start) + newStr + source.slice(start);
}
