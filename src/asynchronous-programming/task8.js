(async function() {
  const getUser = url => fetch(url);

  async function foo(url) {
    try {
      const response = await getUser(url);
      const [user] = await response.json();
      console.log(user);
    } catch (err) {
      console.log('Error! ', err);
    }
  }

  await foo('https://jsonplaceholder.typicode.com/users');

  await foo('ht://jsonplaceholder.typicode.com/users');
})();