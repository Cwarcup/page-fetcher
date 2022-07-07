const request = require('request');
const fs = require('fs');
const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const error = chalk.bold.red;
const success = chalk.bold.green;

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const fetcher = (url, path) => {
  request(url, (err, data, body) => {
    if (data.statusCode !== 200) {
      console.log(error(`Oh no!`));
      console.log(`Looks like there was an issue with the URL.\nUse the status code to see what went wrong.\nStatus code: ${data.statusCode}`);
    }
    if (data.statusCode === 200) {
      fs.writeFile(path, body, {encoding: 'utf-8', flag: 'wx' }, err => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.log('File not found. Double the path.');
          }
          if (err.code === 'EACCES') {
            console.log('Permission denied. Double the path.');
          }
          if (err.code === 'EEXIST') {
            rl.question('File already exists. Double the path.\nIf you want to overwrite the file, press "y" followed by enter.', answer => {
              if (answer === 'y') {
                fs.writeFile(path, body, {encoding: 'utf-8', flag: 'w' }, err => {
                  if (err) {
                    console.log(error(`Oh no!`));
                    console.log(`Looks like there was an issue with the URL.\nUse the status code to see what went wrong.\nStatus code: ${data.statusCode}`);
                  }
                  if (!err) {
                    console.log(success(`Success!`));
                    console.log(`The file was saved to ${path}`);
                  }
                });
                rl.close();
              } else {
                rl.close();
              }
            });
          }
        }
        if (!err) {
          console.log(success(`Success!`));
          console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
        }
      });
    }
  });
};

fetcher(url, path);