
function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}
 const response = getResponseFromAPI();
 console.log(response instanceof Promise);

 export default getResponseFromAPI;