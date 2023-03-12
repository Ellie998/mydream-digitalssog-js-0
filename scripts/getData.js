const appData = new Array();
const appNameElements = document.querySelectorAll(".category-wrap h3");
const checkElement = document.getElementById("check");

// read local JSON file in javascript
fetch("../data/appData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (const item of data) {
      appData.push(item);
      console.log(item);
      for (const appItem of appNameElements) {
        if (item.category == appItem.innerText) {
          const newList = document.createElement("li");
          const newAnchor = document.createElement("a");
          const newAttribute = document.createAttribute("href");

          newAnchor.innerText = item.name;
          newAttribute.value = `../appDetail.html#${item.name}`;

          appItem.nextElementSibling.appendChild(newList);
          newList.appendChild(newAnchor);
          newAnchor.setAttributeNode(newAttribute);
        }
      }
    }
  });
