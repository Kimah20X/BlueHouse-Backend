
function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
signUpUser ("Bob", "Dylan").then((value) => {
  console.log(value);
});

export default signUpUser;