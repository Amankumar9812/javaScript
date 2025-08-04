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

console.log(typeof bigInteger);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof number);
console.log(typeof heroes); //Because in JavaScript, arrays are objects — they are a special kind of object designed to hold ordered data.But under the hood, they are still implemented as objects with keys and values.
console.log(typeof heroes[1]);

// All primitive data types are stored in stack memory.
// When assigned to another variable, a copy is made — changes don't affect the original.
let channel="work with aman"
let name1=channel //name1 is the copy here
name1="sleep with aman" //change in copy
console.log(channel); //no change in original
console.log(name1); //copy got changed

// Non-primitive data types like objects, arrays, and functions are stored in heap memory.
// The variable holds a reference (pointer)[The reference (pointer) is stored in the stack, but the actual data lives in heap memory] in the stack — changes affect the original.
let myObj1={
    name:"user1",
    upiId:"user1@ybl"
}
let obj2=myObj1 //obj2 holds reference
obj2.name="user2"
obj2.upiId="user2@ybl"
console.log(myObj1.name) //change in original
console.log(obj2.name)
