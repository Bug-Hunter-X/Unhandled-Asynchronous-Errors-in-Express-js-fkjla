const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    console.error(error); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send an error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

// Dummy asynchronous operation for demonstration
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}