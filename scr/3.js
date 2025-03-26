3.
/*Handle multiple successful promises

In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

function handleProfileSignup()
In the event of an error, log Signup system offline to the console
*/

//import uploadPhoto from './Utils.js';
//import createUser from './Utils.js';


export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => console.log(photo.body, user.firstName, user.lastName))
    .catch(() => console.log("Signup system offline"));
}


handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((value) => {
  console.log(value);
});