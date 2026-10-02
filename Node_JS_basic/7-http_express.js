const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  let output = 'This is the list of our students\n';
  const originalLog = console.log;
  
  console.log = (msg) => {
    output += `${msg}\n`;
  };

  countStudents(process.argv[2])
    .then(() => {
      console.log = originalLog;
      res.send(output.trim());
    })
    .catch((err) => {
      console.log = originalLog;
      res.send((output + err.message).trim());
    });
});

app.listen(1245);

module.exports = app;
