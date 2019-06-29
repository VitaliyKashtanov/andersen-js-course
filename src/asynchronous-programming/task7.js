const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

async function foo() {
  const res1 = await getPromise1();
  const res2 = await getPromise2();
  const res3 = await getPromise3();
  console.log(res1 * (res2 + res3));
}

foo();