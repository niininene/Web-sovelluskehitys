const express = require('express');
const app = express();
const port = 3001;

// use sample users data
let { users } = require('./data.js');

app.use(express.json());

app.get('/api/users', (req, res) => {
res.status(200).json({ success: true, data: users });
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if (user) res.status(200).json({ success: true, data: user });
    else res.status(404).json({ success: false, error: 'User not found!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});