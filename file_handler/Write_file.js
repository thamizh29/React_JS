var fs = require("fs"); 
//write file it only replace txt 
console.log("going to write into existing file");
fs.writeFile("simple.txt", "simply easy laerning ",function (err){
    if (err){
        return console.error(err);
    }
    console.log("Data succesfully executed");
});