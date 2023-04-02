const request = require('request');
const fs = require('fs');

const myCourse = "Tartu%20-%20Introduction%20to%20Logic%20(Eng)";
const instructor = "litmanhuang@gmail.com";
const apiKey = 'JyBcvyoCj-AjcspJt1Sp8p6lnedI_3f8Z0DOjEid6QOd';
const url = `https://carnap.io/api/v1/instructors/${instructor}/courses/${myCourse}/students`;
const filePath = './apiData.json';

const options = {
  url: url,
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const jsonData = JSON.parse(body);
    fs.writeFile(filePath, JSON.stringify(jsonData), function (err) {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File written successfully');
      }
    });
  } else {
    console.error('Error:', error);
  }
});
