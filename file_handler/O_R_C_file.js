var fs = require("fs"); 
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