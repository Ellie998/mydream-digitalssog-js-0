const appData = [];
const appNameElements = document.querySelectorAll(".category-wrap h3");

// read local JSON file in javascript
fetch("../data/appData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (const item of data) {
      appData.push(item);
      for (const appItem of appNameElements) {
        if (item.category == appItem.innerText) {
          console.log(item.name);
          const newList = document.createElement("li");
          newList.innerText = item.name;
          appItem.nextElementSibling.appendChild(newList);
        }
      }
    }
    // console.dir(appData[0].name);
  });
