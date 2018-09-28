import { isArray } from './utils';

export function min(param, ...arg) {
  let val;
  if (param !== undefined && param !== null) {
    if (isArray(param)) {
      val = Math.min(...param);
    } else if (arg.length > 0) {
      arg.push(param);
      val = Math.min(...arg);
    } else {
      val = param;
    }
  }
  return val;
}

export function copy(data) {
  let copyArr;
  if (isArray(data)) {
    copyArr = [...data];
  } else {
    copyArr = { ...data };
  }
  return copyArr;
}

export function reverseMerge(arr1, arr2) {
  const newArr = [];
  newArr.push(...arr2);
  newArr.push(...arr1);
  return newArr;
}

export function filterAttribs({ a, b, ...json }) {
  return json;
}
