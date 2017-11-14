
(() => {
  return fetch('http://localhost:3000/sleep')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
})();
