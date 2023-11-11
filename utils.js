export function slower(func, seconds) {
    let timerId;
  
    return function (...args) {
      clearTimeout(timerId);
  
      let context = this;
  
      timerId = setTimeout(function () {
        return func.call(context, ...args);
      }, seconds * 1000);
    };
}  