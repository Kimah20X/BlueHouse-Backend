0.
function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}
promise.then(() => {
  console.log('Got a response from the API');
});

1.
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
promise.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});


2.
function handleResponseFromAPI(promise) {
  return promise(resolve, reject)
    .then(() => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

const promise = Promise.resolve();


3. //Handle multiple successful promises

function handleProfileSignup() {
  return new promise((resolve, reject) => {
   if (success) {
    resolve(photo, user);
  }
  )}
  else { 
    reject('Signup system offline');
  }
promise.then((photo, user) => {
  console.log(photo.body.firstName, user.body.lastName);
}).catch((error) => {
  console.log(error);
});

4.//Simple promise

function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
  let firstName = '';
  let lastName = '';
}


5. //Reject the promises

function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

promise.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});
reject.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.log(error);
});


6. //handle multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(filename)
  ])
  return new Promise((resolve, reject) => {
    resolve([
      { status: 'fulfilled', value: signUpUser(firstName, lastName) },
      { status: 'rejected', value: uploadPhoto(fileName) }
    ])
    reject([])
  }
promise.then(() => handleProfileSignup(firstName, lastName, fileName));
console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));


8. //Throw error / try catch
import divideFunction from './8-try';

function divideFunction(numerator, denominator){
  if(denominator === 0){
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
  
}
promise.then(() => {
  console.log(divideFunction(10, 2));
  console.log(divideFunction(10, 0));
}

9.
 //Throw an error
function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.tostring());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
promise.then(() => {
  console.log(guardrail(() => { return divideFunction(10, 2)}));
  console.log(guardrail(() => { return divideFunction(10, 0)}));
}


10.

// Await / Async 
async function asyncUploadUser() {
  return Promise((resolve, _reject) => {
    resolve({ photo: uploadPhoto(), user: createUser() });
    try {
      let photo = await uploadPhoto();
      let user = await createUser();
      resolve({ photo, user });
    } catch (error) {
      resolve({ photo: null, user: null });
    }
  });
  return mypromise;
}