const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_PATH = process.argv[2];

function readStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== '');
      lines.shift();

      const fields = {};
      let total = 0;
      lines.forEach((line) => {
        const cols = line.split(',');
        if (cols.length < 4) return;
        const firstName = cols[0].trim();
        const field = cols[3].trim();
        if (!firstName || !field) return;
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
        total += 1;
      });

      let output = `Number of students: ${total}`;
      Object.keys(fields).forEach((field) => {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });
      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const header = 'This is the list of our students\n';
  readStudents(DB_PATH)
    .then((report) => {
      res.type('text/plain').send(`${header}${report}`);
    })
    .catch((error) => {
      res.type('text/plain').send(`${header}${error.message}`);
    });
});

app.listen(PORT);

module.exports = app;
