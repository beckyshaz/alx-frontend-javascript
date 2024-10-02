export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

getFullResponseFromAPI(false)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err.message);
  });
