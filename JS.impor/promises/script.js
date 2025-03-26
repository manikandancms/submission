/**
 JS
 ->Synchronous Execution [Default]
 -line By line
 
 ->Asynchronous Execution

 -if the Execution takes some time then the Execution is call Async Execution

 what is promise?
 => it is an way it handle Async Execution in Javascript
  
  
 */

 console.log("hello world-1")
 console.log("hello world-2")
 console.log("hello world-3")


 //make an API call OLD METHOD:

/* const response =fetch("https://dummyjson.com/products").then((e)=>{return e.json()}).then ((e)=>{console.log(e)}).catch((err)=> {console.log(err);})

 console.log(response) */


async function fetchData() {

    try { const res = await fetch ("https://dummyjson.com/products");
        const ans =await res.json();
    
        console.log(ans)

    } catch (err) {
        console.log (err);
    }
   
 }

 fetchData()


