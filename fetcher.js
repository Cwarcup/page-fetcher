const request = require('request');
const fs = require('fs');
const chalk = require('chalk');

const error = chalk.bold.red;
const success = chalk.bold.green;

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const fetcher = (url, path) => {
  request(url, (err, data, body) => {
    if (err) {
      console.log(err);
    }
    if (data.statusCode === 200) {
      fs.writeFile(path, body, err => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.log('File not found. Double the path.');
          }
          if (err.code === 'EACCES') {
            console.log('Permission denied. Double the path.');
          }
          if (err.code === 'EEXIST') {
            console.log('File already exists. Double the path.');
          }
        }
        console.log(success('File saved!'));
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      });
    }
    console.log(error(`Oh no! Looks like there was an issue with the URL.\nUse the status code to see what went wrong.\nStatus code: ${data.statusCode}`));
  });
};

fetcher(url, path);
