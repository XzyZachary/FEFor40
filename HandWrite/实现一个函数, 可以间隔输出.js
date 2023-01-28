function createRepeat(fn, repeat, interval) {
  //   let num = 0;
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  //     if (num > repeat) return;
  //     return new Promise((res, rej) => {
  //       setTimeout(() => {
  //         fn.apply(context, args);
  //         num++;
  //       }, interval);
  //     });
  //   };
  return async function () {
    const args = arguments;
    while (repeat) {
      await new Promise((res) => {
        setTimeout(() => {
          fn(...args);
          repeat--;
          res();
        }, interval * 1000);
      });
    }
  };
}

const fn = createRepeat(console.log, 3, 4);

fn("helloWorld"); // 每4秒输出一次helloWorld, 输出3次
