const express = require('express');
const app = express();
const PORT = 5000;
//load the quotes JSON
const quotes = require('./anecdotes.json');

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /anecdotes            - Should return all anecdotes (json)
//   /anecdotes/random     - Should return ONE anecdote (json)
app.get('/test', function (request, response) {
  response.send('My Server!  Ask me for /anecdotes/random, or /anecdotes');
});

//START OF YOUR CODE...
app.get('/anecdotes', function (request, response) {
  response.send(quotes);
});

app.get('/', function (request, response) {
  response.send(pickFromArray(quotes));
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// create .env file, also install dotenv, and require in the app

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log('Server is listening on port ' + PORT);
});
