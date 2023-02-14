var fs = require("fs");
//Synchronous read order
var data =fs.readFileSync("sample.txt");
console.log("Synchronous read: " + data.toString());
console.log("Program has end");