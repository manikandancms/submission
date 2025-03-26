/**
 1.function
 -->Argument-Number, String, Bool, null, Array, Object
 -->function[call Back]

 1. callback function
 
 A function that is passed as an Argument to another function.

 */

const { id } = require("./script");



//parameters

/**function add (a,b){
    console.log(a+b)

}

add(10,10)

  function a(val){
    console.log(val)
  }


    a(function ab(){
        console.log("NSPIFW")
    })

    let counter = 0

    const id=setInterval(function(){
        counter=counter+1
        console.log(counter)
    },1000)

console.log(id)*/


let counter = 0;
const id = setTimeout(function() {
  counter=counter+1;
  console.log(counter);
}, 5000);

clearTimeout(id);








    
    

