var fs = require("fs");
//Asynchronous read un order
fs.readFile("sample.txt", function (err, data){
    if (err) {
        return console.error(err);
    }
    console.log("Asynchromous read : " + data.toString());
    
});
console.log("Priority Base");
