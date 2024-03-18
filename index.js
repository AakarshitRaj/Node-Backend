// const app = require('./app')//used to import from another file
// console.log(app.x);//to fetch x value from app.js
// console.log(app.y);
// console.log(app.z());


// console.log("sub");
// console.warn("ss");
// console.error("err");
// let a=20;
// if(a===20){//type match
//     console.log("x matched");
// }
// let b='20'
// if(b==20){//value matched
//     console.log("y matched");
// }

// const arr=[2,5,6,4,7,3,8,3,1];

// arr.filter((item)=>{
//     console.log(item);
// });

// let res=arr.filter((item)=>{
//     return item===3;
// })
// console.log(res);


//console.log(process.argv);

// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file");
// }
// fs.readdir(dirPath,(err,items)=>{
//     console.warn(items);
// })

// const filePath=`${dirPath}/hello0.txt`;
// fs.appendFile(filePath,' and my name is aakarshit',(err)=>{
//     if(!err) console.log("file is updated");
// });

// fs.rename(filePath,`${dirPath}/fruit.txt`,err=>{
//     if(!err) console.log("file name is updated");
// });

// fs.unlinkSync(`hellow0.txt`);
// fs.unlinkSync(`${dirPath}/hello1.txt`);

console.log("Hello");
setTimeout(()=>{
    console.log("World");
},2000)

console.log("Nitish");