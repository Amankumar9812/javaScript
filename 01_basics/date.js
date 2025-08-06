let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); //Wed Aug 06 2025
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); // 8/6/2025
console.log(myDate.toLocaleString()); // 8/6/2025, 6:44:01 PM
console.log(typeof myDate);

let myCreatedDate=new Date(2025,0,12) //here jan starts with 0
console.log(myCreatedDate.toDateString());

let myNewDate= new Date(2025,0,14,5,3)
console.log(myNewDate.toLocaleString());

let date2=new Date("01-14-2026") //here jan =01
console.log(date2.toLocaleDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(date2.getTime());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(Math.floor(Date.now()/1000)); //smaller value of seconds








