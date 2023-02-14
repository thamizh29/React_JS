 var fs = require("fs");
// //import 
// //Asynchronous read
// fs.readFile("sample.txt", function (err, data){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchromous read : " + data.toString());
// });
// //Synchronous read
// var data =fs.reaadFileSync("sample.txt");
// console.log("Synchronous read: " + data.toString());
// console.log("Program has end");
// write file it only replace txt 
// console.log("going to write into existing file");
// fs.writeFile("simple.txt", "simply easy laerning ",function (err){
//     if (err){
//         return console.error(err);
//     }
//     console.log("Data succesfully executed");
// });
// open and read and close
// r-read ,r+ -read + write,w-write,w+ -read -write, 
var buf = new Buffer(1024);
console.log("going to open an existing file");
fs.open("sample.txt", "r+", function(err , fileData){
    if(err){
        return console.error(err);
    }
    console.log("file open succesfully");
    console.log("going to read the file");
    fs.read(fileData , buf , 0 , buf.length, 0, function(err , bytes){ //buf is temp storage for the file content 0 is start index buf.length end index
        if(err){
            console.error(err);
        }
        console.log(bytes + "bytes read");
        //print only read bytes to avoid junk
        if(bytes > 0){
            console.log(buf.slice(0 , bytes.length).toString());
        }
    });
    fs.close(fileData ,function(err){
        if(err){
            console.log(err);
        }
        console.log("file closed successfuly");

    });
});
// //fs.unlink("simple.txt", function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log("file delete successfully");
// });