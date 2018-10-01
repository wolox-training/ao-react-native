import { isArray } from './utils';

export function min(param, ...arg) {
  let val;
  if (param) {
    if (isArray(param)) {
      val = Math.min(...param);
    } else if (arg.length) {
      arg.push(param);
      val = Math.min(...arg);
    } else {
      val = param;
    }
  }
  return val;
}

export function copy(data) {
  return isArray(data) ? [...data] : { ...data };
}

export function reverseMerge(arr1, arr2) {
  const newArr = [].concat(...arr2).concat(...arr1);
  return newArr;
}

export function filterAttribs({ a, b, ...json }) {
  return json;
}
