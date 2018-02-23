const fs = require('fs');

function getData(req, res) {
  fs.readFile(__dirname + "/../dataFiles/testData.json", "utf8", (err, data) => {
    res.send(data);
  });
}

module.exports = getData
