const num=400
console.log(num);

const balance= new Number(400)
console.log(balance); //print as an object
console.log(balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(4));

const num2=1000000000
console.log(num2.toLocaleString("en-IN")); //commas between zero a/c to indian number system

const num3=22.8964
console.log(num3.toPrecision(3)); //start counting from "2" so 3rd digit is 8, it will round off after 8(starts with 9)

const num4=122.8965
console.log(num4.toPrecision(3)); //123 as rounoff starts with "8" . 122 is already 3 digit

console.log(Math.abs(-67));
console.log(Math.round(8.3));
console.log(Math.ceil(4.2)); //will take higher value here above 4
console.log(Math.floor(4.9)); //will take lower value only

Math.random() //always give value b/w 0 and 1
//to get value in any range:

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); //floor to remove decimal and get lower value
/*| Expression                                          | Range                       |
| --------------------------------------------------- | --------------------------- |
| `Math.floor(Math.random() * (max - min + 1)) + min` | [min, max] (inclusive) |
| `Math.floor(Math.random() * (max - min)) + min`     | [min, max) (exclusive) |
 */





