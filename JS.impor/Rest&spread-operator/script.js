/**
 * Rest

    
 * Spread

 */
//Array
// spread: unpack element into individual element

let arr1=[1,2,3]

let arr2=[...arr1,4,5] //[1,2,3,4,5,6,7]

console.log(arr2)

arr3=[...arr2] //[1,2,3,4,5,6,7]


console.log(arr3)

arr3=[...arr1,...arr2]  //[1,2,3,1,2,3,4,5]

console.log(arr3)

//Object

let person ={name:"sam", age:1};

//Copy
let person2 ={...person,city:"chennai"}  //{name:"same", age:1, city:"chennai"}
console.log(person2)

let person3={...person,...person2}
console.log(person3)
//2.Rest-pack all the Elements into Array
  // note:rest will always should be at last
//Function

function add(a,b, ...rest){
    console.log(rest)
    console.log(a+b)
}
    
add(10,40)


let arr =[1,2,3,4,5,6,7,8];

add(...arr);  

//String method

let names = "Hello World "
//help us in giving the length

console.log(names.length)

//it Help to Form a Array
console.log(names.split(" "));

//convert all to Uppercase
console.log(names.toUpperCase())

//convert all to lowercase
console.log(names.toLowerCase())

//Trim-Remove this whiteSpaces

console.log(names.trim())

console.log("==========")

//1.Array Destructuring

let array =[1,2,3,4,5,6,7,8]

 //[1,2,3,4,5,6,7,8]

let [a,b,c,d] =[1,2,3,4,5,6,7,8]

console.log(a)


//2.Object Destructuring
let person4={namess:"Sam", age:1};
//1.Dot Notation
console.log(person4.age);

//2.Bracket Notation
console.log(person4["namess"]); 

//Object destructring
const{namess, age}= person4;
console.log(namess,age);



