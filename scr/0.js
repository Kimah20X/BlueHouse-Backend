0.
/*Keep every promise you make and only make promises you can keep
Return a Promise using this prototype function getResponseFromAPI()
*/
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