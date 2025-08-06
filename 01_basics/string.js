let name=new String("aman-kumar")//in js we can use both "" or '' for string
let totalVideo=80

console.log(`my name is ${name} and total video I watched is ${totalVideo}`);
console.log(name.toUpperCase()); //it does not change in original string
console.log(name.charAt(2));
console.log(name.indexOf('u'));

//can give -ve value in slice but not in substring
//substring[start,end)

let newString="    setu     "
console.log(newString)
console.log(newString.trim()) //this removes the front and back space. works only on white space and line terminators

const url="https://aman.com/aman%20portfolio/amankumar"
console.log(url.replace('%20','*'))
console.log(url.includes("aman kumar"))

const newId="aman-kumar-com-portfolio"
console.log(newId.split('-')) //split string on basis of "-" and convert in array
//can split on basis of anything
console.log(newId.split('o'))
console.log(newId.split('a'))
console.log(newId.anchor("https")) //now deleted
console.log(newId.at(4)) //-ve value count backward
console.log(newId.charCodeAt(5)) //character code at this index
console.log(newId.codePointAt(5)); //character code at given index
/*charCodeAt(index)
Returns the 16-bit UTF-16 code unit at the given index.
Cannot handle characters represented by surrogate pairs (characters beyond U+FFFF) properly.
Returns a number between 0 and 65535

codePointAt(index)
Returns the actual Unicode code point at the given index.
Can handle characters beyond U+FFFF correctly by combining surrogate pairs.
Returns the full Unicode code point (can be > 65535).*/
console.log(newId.isWellFormed()); //check lone surrogate

console.log("apple".localeCompare("banana"))
/*| Value | Meaning                        |
| ----- | ------------------------------ |
| `-1`  | `str1` comes **before** `str2` |
| `0`   | `str1` is **equal to** `str2`  |
| `1`   | `str1` comes **after** `str2`  |
 localeCompare return only these 3 values*/

 console.log('a'.localeCompare('A', 'en', { sensitivity: 'base' }));
 /*sensitivity: 'base' It means the comparison ignores:
case differences (e.g., "a" = "A")
accent/diacritic differences (e.g., "e" = "é")
'en' for english*/

console.log('file10'.localeCompare('file2', undefined, { numeric: true }));
//with { numeric: true }, the comparison is done numerically, not alphabetically.
// Output: 1

/*'file10'.localeCompare('file2'); 
Output: -1 → because "1" in "file10" comes before "2" alphabetically
 */

const newstr="hello everyone, i hope You All are Fine"
const regex=/[a-z]/g
console.log(newstr.match(regex))
/*Without /g → the regex finds only the first match.
With /g → it finds all matches in the string. */
const str = "apple, apple, apple";

// Without /g → only first match
str.match(/apple/);     //this is same as str.match("apple")     
// → [ 'apple', index: 0, input: 'apple, apple, apple', ... ]

// With /g → all matches
str.match(/apple/g);         
// → [ 'apple', 'apple', 'apple' ]

const text = "Cat, cAt, caT, dog, DOG, DoG";
const regex1 = /cat/gi;
const result = text.match(regex1);// returns array
console.log(result); 
/*The flags:
g → global match (find all matches)
i → case-insensitive (match both upper and lower case) */
//matchAll returns iterator not array

console.log("aman".padEnd(10,"/"))
console.log("aman".padStart(41,"*"))
//substr() deleted