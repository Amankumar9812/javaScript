let age=4
let name="aman"
let state=null //standalone value
let flag;

console.log(typeof null); //object
console.log(typeof flag) //undefined

let bigInteger=78952n
let number=NaN
const myFunction=function(){
    console.log("my function")
}

const myObj={
    name:"aman",
    age:85,
    alcoholic:false
}

const heroes=["a","b","c"]

console.log(typeof bigInteger)
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof number);
console.log(typeof heroes); //Because in JavaScript, arrays are objects — they are a special kind of object designed to hold ordered data.But under the hood, they are still implemented as objects with keys and values.

console.log(typeof heroes[1]);

