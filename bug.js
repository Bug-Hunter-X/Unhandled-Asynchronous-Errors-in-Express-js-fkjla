const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling is missing here! Express will not handle this correctly.
    console.error(error);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));