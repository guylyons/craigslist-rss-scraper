var request = require("request");
var parseString = require("xml2js").parseString;
var util = require("util");

module.exports = {
  request: input => {
    console.log("Hello, " + input);
    return "HELLO" + input;
  }
};
