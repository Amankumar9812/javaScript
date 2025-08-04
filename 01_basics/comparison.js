//avoid such comparison
console.log(null==0)
console.log(null>0)
console.log(null>=0)
//reason for above is that equality check== and comparison > <= >= < work differently
//comparison convert null to a number treating it as 0 so null>=0 true; null>0 false
//== treats null and undefined as equal to each other only, not to any number.

//=== this not only check value but also data type, it will not do any conversion unlike ==

console.log(undefined==0) //Like null, undefined is only loosely equal to null, not to any number
console.log(undefined>0) //In relational comparisons, undefined is converted to NaN.
console.log(undefined>=0) //Any comparison involving NaN is always false, including NaN >= 0.

/*NaN == NaN → false

NaN === NaN → false

Any comparison involving NaN (like NaN > 0, NaN < 0, NaN >= 0, etc.) is always false.

typeof NaN is "number" — but it’s a special invalid number.*/

console.log(NaN==undefined);
console.log(null==undefined);

