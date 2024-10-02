export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve();
    } else {
      reject(new Error());
    }
  });
}
getResponseFromAPI()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
