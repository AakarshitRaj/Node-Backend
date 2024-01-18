const app = require('./app')//used to import from another file
console.log(app.x);//to fetch x value from app.js
console.log(app.y);
console.log(app.z());


console.log("sub");
console.warn("ss");
console.error("err");
let a=20;
if(a===20){//type match
    console.log("x matched");
}
let b='20'
if(b==20){//value matched
    console.log("y matched");
}

