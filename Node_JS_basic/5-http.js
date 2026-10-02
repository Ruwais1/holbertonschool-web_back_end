const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    const originalLog = console.log;
    let output = '';
    console.log = (msg) => {
      output += `${msg}\n`;
    };

    countStudents(process.argv[2])
      .then(() => {
        console.log = originalLog;
        res.end(output.trim());
      })
      .catch((err) => {
        console.log = originalLog;
        res.end(err.message);
      });
  }
});

app.listen(1245);

module.exports = app;
