
function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
uploadPhoto('guillaume.jpg').catch((error) => {
  console.log(error);
});
export default uploadPhoto;
