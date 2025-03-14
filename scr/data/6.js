6. //handle multiple promises
/*Handle multiple promises

Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
*/

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ])
  .then(([photo, user]) => {
    console.log(photo.body, user.firstName, user.lastName);
  })
  .catch(() => {
    console.log('Signup system offline');
  });
}
handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
