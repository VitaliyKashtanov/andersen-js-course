const parseJSON = (jsonStr, successCb, failureCb) => {
  return new Promise(resolve => {
    try {
      JSON.parse(jsonStr);
      resolve(successCb(jsonStr));
    } catch (e) {
      failureCb(e);
      console.log(e.name);
      console.log(e.message);
    }
  });
};

const successCb = result => {
  console.log('Success parse!');
  console.log(result);
};
const failureCb = error => {
  console.log('Failure parse!');
};

parseJSON('{"x": 10}', successCb, failureCb);
// parseJSON('{x}', successCb, failureCb);