const foo = (x, cb) => {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else {
    console.log('x <= 10');
  }
};

const createCb = str => {
  return () => {
    console.log(str);
  };
};

foo(91, createCb('cb'));
