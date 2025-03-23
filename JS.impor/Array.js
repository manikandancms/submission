console.log("Hello world")

//Array- An array is a collection of data types which stores and ordered sequence of item[number, string, bool, null]

/**
 * 1. How to create Array
 * 2.How do you Access an Element in Array 
 * -By index [0,~]
  Ans: console.log(arr[1])
 
 * 3. How to count the No of Element 
  --length()
  length() is not function, length() is a property.
  console.log(arr.length)

  length always starts from 1 to infinity

  *4. How to add in array element:
  To add: console.log(arr.push ("Beem")) NOte: always at last
  console.log(arr)
  
  *5. How do you Remove in Array

  arr.pop(), note: always at last


  
 
 
 */
//index: 0,1,2,3,
let arr=[ 1,"RAM", true, null]

console.log(arr)
console.log("Before:", arr[1])
console.log(arr[3])
console.log(arr[4])

arr[1] = "Sam"

console.log( "After:",arr[1])


console.log("---------")
console.log(arr.push ("Beem"))
console.log(arr)

console.log("---------")
console.log(arr.pop ("Beem"))
console.log(arr)

//OBJECT

/**
 * similier to dic 
 * Object-A object is a collection of properties
 -> properties:{key--value}
 --> Key: Unique

 -->Value: Anything-String, number, bool, null

 1. How to Create an Object

 2. How to Access an Object

   Dot Notation: console.log(person.name)

   Bracket Notation: console.log(person["name"])

3.How to modify a Object

  first need to Access

  person["name"] = "Ram"
  console.log(person);


  4. How do you Add  an Element  in Object

  person ["number"]= "1234567890"
  person.gender="male"
  console.log(person);

  5. how to remove in object 

  Dot Notation : Delete person.age=60
  bracket Notation: Delete person["name"]= "Ram"
  console.log(person)
  

  

 */


 let person = {name: "Sam", age:1};
 console.log(person);

 console.log(person.name)
 console.log(person.age)

console.log(person["name"])
console.log(person["age"])


console.log("----3----")

person["name"] = "Ram"
console.log(person);

console.log("----4----")
 person ["number"]= "1234567890"
 person.gender="male"
console.log(person);



console.log("-----5---")

 delete person.gender
 delete person["age"]
console.log(person)


/**
 Identifiers : set of Rules to name a variable

 firstName-
$firstName-
_firstName-
firstName12-

first Name-X
12first Name-X
  
  
 */




let obj={
//(property) name: String

number: 1,
name: "sam",
habit: true,
no: null,
habits:["chess", "playing football"],

car:{
    name: "Audi",
    model:"A5",
    color:"white",
},



}


console.log (obj.name);
console.log (obj.habit);
console.log (obj.number);
console.log (obj.habits[1]);
console.log (obj.no);
console.log (obj.car.name);









