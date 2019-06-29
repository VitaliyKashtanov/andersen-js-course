const promise = Promise.all([
  fetch('http://www.json-generator.com/api/json/get/cevhxOsZnS').then(response => response.json()),
  fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi').then(response => response.json()),
  fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm').then(response => response.json()),
  fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS').then(response => response.json()),
  fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK').then(response => response.json()),
]);
promise.then(response => console.log(response));

async function sequence() {
  const response1 = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG').then(
    response => response.json()
  );
  const response2 = await fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi').then(
    response => response.json()
  );
  const response3 = await fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm').then(
    response => response.json()
  );
  const response4 = await fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS').then(
    response => response.json()
  );
  const response5 = await fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK').then(
    response => response.json()
  );
  return `sequence is done: RESPONSE1-${response1} RESPONSE2-${response2} RESPONSE3-${response3} RESPONSE4-${response4} RESPONSE${response5}`;
}
sequence();
