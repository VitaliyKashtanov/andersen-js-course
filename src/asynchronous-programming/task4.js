async function getData() {
  const response = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
  const data = await response.json();
  if (data.getUsersData === true) {
    fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
      .then(response => response.json())
      .then(data => console.log(data));
  }
}

getData();
