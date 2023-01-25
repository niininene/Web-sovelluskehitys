const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require('express');
// const app = express();
// const port = 5000;

function handler(request, response) {
  response.send('Hello !');
}

app.get('/', handler);

// function cb() {
//   console.log(`Example app listening on port ${port}`);
// }

// app.listen(port, cb);
