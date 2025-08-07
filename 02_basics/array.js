const myArr=[0,1,2, true,"aman"] //size is resizable
const arr= new Array(1,2,3)
//shallow copy and deep copy
//shallow copy- share same reference, any change is change in original 
//deep copy- donot share same reference, copy is made and change is in copy not original one
//array follow shallow copy

arr.unshift(10) //add 10 at 0th position, it means change the index of all elements present in array.
arr.shift()//removes element at 0th position
// console.log(arr.includes(3)); //true

let arr1=arr.join()
// console.log(arr1); //gives same values as of arr but typeof arr1 will be string

const newArr=[1,2,3,4,5,6]

newArr.slice(1,3) //does not include 3rd index, slice element 1 and 2
console.log("A.", newArr); //after slice function, no change in original array
newArr.splice(1,3) //include 3rd index
console.log("B.", newArr); //after splice function , it can be seen that elements from index value 1 to 3 is removed from original array
