console.log("hello");

let nos = 8;
let result = 10;

console.log(nos==result);

//we understand loose (==) it function is equal but work not like accurately it wont consider the which typeof data.

 nos = 8;
 result = "8";

console.log(nos==result);


nos = 8;
 result = "8";

console.log(nos===result);
//we understand strict (===) it function also is equal but work like accurately with match value . it does consider the which typeof data.

nos = 8;
 result = 8;

console.log(nos===result);

// we can understand it if excute this data into js.