import { uploadPhoto } from './Utils.js';
import { createUser } from './Utils.js';


export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => console.log(photo.body, user.firstName, user.lastName))
    .catch(() => console.log("Signup system offline"));
}

handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((value) => {
  console.log(value);
});