import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== '');
      lines.shift();

      const fields = {};
      lines.forEach((line) => {
        const cols = line.split(',');
        if (cols.length < 4) return;
        const firstName = cols[0].trim();
        const field = cols[3].trim();
        if (!firstName || !field) return;
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });
      resolve(fields);
    });
  });
}

export default readDatabase;
