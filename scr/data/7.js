7.//loadBalancer
/*
. //loadBalancer
const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise((resolve) => {
  setTimeout(resolve, 100, ukSuccess); // Resolves after 100ms
});

const promiseUKSlow = new Promise((resolve) => {
  setTimeout(resolve, 400, ukSuccess); // Resolves after 400ms
});

const promiseFR = new Promise((resolve) => {
  setTimeout(resolve, 200, frSuccess); // Resolves after 200ms
});

// Test the loadBalancer function
const test = async () => {
  console.log(await loadBalancer(promiseUK, promiseFR)); // Should log 'Downloading from UK is faster'
  console.log(await loadBalancer(promiseUKSlow, promiseFR)); // Should log 'Downloading from FR is faster'
}

test();
*/
const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise((resolve) => {
  setTimeout(resolve, 100, ukSuccess); 
});

const promiseUKSlow = new Promise((resolve) => {
  setTimeout(resolve, 400, ukSuccess); 
});

const promiseFR = new Promise((resolve) => {
  setTimeout(resolve, 200, frSuccess); 
});

const test = async () => {
  console.log(await loadBalancer(promiseUK, promiseFR)); 
  console.log(await loadBalancer(promiseUKSlow, promiseFR)); 
}

test();