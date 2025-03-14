4./* Simple promise

Using the following prototype

function psignUUser(firstName, lastName) 
*/

function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
signUpUser ("Bob", "Dylan").then((value) => {
  console.log(value);
});