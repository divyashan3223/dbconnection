// access file system
import fs from "fs";

let result=fs.readFileSync('one.txt','utf-8');
// fs.writeFile('one.txt','data added additionaly ',(err)=>{console.log(err);
// })
console.log(result);

