// read local JSON file in javascript
fetch("../data/appData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

alert("hi");
