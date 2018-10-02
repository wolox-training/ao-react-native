// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time <= 500) {
      resolve(time);
    } else {
      const err = new Error('This time is too much !');
      reject(err);
    }
  });
}

export function asyncDelay(time) {
  return delay(time);
}
