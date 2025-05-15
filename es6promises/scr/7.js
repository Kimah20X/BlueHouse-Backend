
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
