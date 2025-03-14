3.
/*Handle multiple successful promises

In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

function handleProfileSignup()
In the event of an error, log Signup system offline to the console
*/

import { uploadPhoto, createUser } from './utils';


function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    uploadPhoto(fileName),
    createUser (firstName, lastName)
  ])
  .then(([photo, user]) => {
    console.log(photo.body, user.firstName, user.lastName);
  })
  .catch(() => {
    console.log('Signup system offline');
  });
}
handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
