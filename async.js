function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Data fetched!");
      resolve();
    }, 2000);
  });
}
async function fetchDataAsync() {
  console.log("Start fetching data...");
  await fetchData();
  console.log("Data fetched using async/await.");
}
fetchDataAsync();
