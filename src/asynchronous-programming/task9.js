const asyncBar = async () => 'Some string!';

async function foo() {
  const res = await asyncBar();
  console.log(res);
}

foo();
