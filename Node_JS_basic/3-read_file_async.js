const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    lines.shift();

    console.log(`Number of students: ${lines.length}`);

    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      const field = student[3];
      const firstName = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    resolve();
  });
});

module.exports = countStudents;
