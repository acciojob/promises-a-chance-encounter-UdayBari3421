//your JS code here. If required.
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function createRandomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = getRandomNumber();
    const shouldReject = Math.random() < 0.5;

    if (shouldReject) {
      reject(`Promise ${randomNumber} rejected with an error`);
    } else {
      resolve(`Promise ${randomNumber} resolved with ${randomNumber}`);
    }
  });
}

async function runPromises() {
  const promises = Array.from({ length: 5 }, createRandomPromise);

  try {
    const results = await Promise.all(promises);
    results.forEach(result => {
      const pTag = document.createElement("p");
      pTag.textContent = result;
      document.getElementById("output").appendChild(pTag);
    });
  } catch (error) {
    console.error(error);
  }
}

runPromises();