const getResolvedPromise = value => {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
};

getResolvedPromise(500)
  .then(value => {
    if (value > 300) {
      throw 'Ошибка';
    } else {
      console.log(`Value ${value}`);
    }
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(function() {
    console.log('This is Finally!');
  });
