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

//The splice() method in JavaScript is not just for removing elements — it can also insert new elements at any position in an array.
//array.splice(startIndex, deleteCount, item1, item2, ..., itemN)
/*startIndex: the position to start changing the array.
deleteCount: how many elements to remove.
item1, item2, ...: optional items to insert at startIndex.*/
let array1 = [1, 2, 3, 7, 8];
array1.splice(3, 2, 4, 5, 6); // Start at index 3, remove 2 elements (7, 8), insert 4, 5, 6
console.log(array1);         // Output: [1, 2, 3, 4, 5, 6]


const marvel_heros=["ironman", "thor","hulk"]
const dc_heros=["flash","batman","superman"]
// marvel_heros.push(dc_heros) //change original array
// console.log(marvel_heros); //merge both array but dc_heros is merged as complete array means array is inserted inside array
// marvel_heros.concat(dc_heros) no change in array
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros); // merged into single array, return new array

//best way to merge is to use spread
const all_new_heros=[...marvel_heros,...dc_heros] //this ... spread each element of array, once we used ... each element of marvel heros are spread into different elements
console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]] //here depth is 2 as [4,5] is under [6,7] which is under main array. use flat to bring all element in one array
const secondArray=anotherArray.flat(Infinity) //depth given in bracket, infinity means it will figure out it's depth on its own
console.log(secondArray);

//sometimes web page will give us data in object form or nodelist form or any other, but we need in array form to iterate over it
console.log(Array.from("amankumar")); // make amankumar an array, we can pass string, object, nodelist anything and from() will make it array
console.log(Array.isArray("amankumar")); //This creates a new array from the string and logs it.BUT this array is not stored anywhere — it's just printed.So "amankumar" is still just a string.

console.log(Array.from({name:"boy"})); //this will give empty array bcz we have to tell it , either it should make arrays of value or key or anything else. if we don't it will give empty array

let score1=100
let score2=100
let score3=100
console.log(Array.of(score1,score2,score3));

// read more about is, from and of

let a=[1,2,3]
let b=a
b.push(4)
console.log(a); //In JavaScript, arrays (and objects) are reference types. So when you assign b = a, you're not copying the array — you're copying the reference. Any change made through b will affect a as well, since both point to the same underlying array in memory.

//If you want to create a copy of a (so changes to b don’t affect a), you can do this:
// b = [...a]; // or a.slice(), or Array.from(a)

