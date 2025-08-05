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


