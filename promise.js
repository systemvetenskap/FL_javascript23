function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Data hämtat!");
      resolve();
    }, 2000);
  });
}

fetchData().then(function () {
  console.log("tack");
});
