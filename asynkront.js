function fetchData(callback) {
  setTimeout(function () {
    console.log("Data hämtat!");
    callback();
  }, 2000);
}
console.log("All kod har körts. 1");

console.log("processen har startat");
fetchData(function () {
  console.log("Processen har avslutats.");
});

console.log("All kod har körts");
