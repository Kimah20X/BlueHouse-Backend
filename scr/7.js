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

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

const ukSuccess = "Downloading from UK is faster";
const frSuccess = "Downloading from FR is faster";

const promiseUK = new Promise((resolve) => {
  setTimeout(() => resolve(ukSuccess), 100);
});

const promiseUKSlow = new Promise((resolve) => {
  setTimeout(() => resolve(ukSuccess), 400);
});

const promiseFR = new Promise((resolve) => {
  setTimeout(() => resolve(frSuccess), 200);
});


const test = async () => {
  console.log(await loadBalancer(promiseUK, promiseFR));   // Test 1: UK should win
  console.log(await loadBalancer(promiseUKSlow, promiseFR)); // Test 2: FR should win
};

test();
