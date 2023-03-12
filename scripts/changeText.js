const appData = new Array();
const url = decodeURI(window.location.href);
const appName = url.substring(url.indexOf("#") + 1, url.length);

// read local JSON file in javascript
fetch("../data/appData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // get app object and save to array appName
    for (const item of data) {
      if (item.name == appName) {
        appData.push(item);
      }
    }
  });

// console.log(appData);
