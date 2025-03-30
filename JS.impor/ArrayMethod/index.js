//Array

let array =[1,2,3,4,5]

/**
 * 1. Map- Like a for Loop give a condition
 *           (it always returns as an Array)
 * 
 * 2.Filter-
 * 
 * 3.Reduce-
 */

const ans = array.map((i)=>{
    console.log(i)
    return i
})

const res = array.filter((i)=>{
    return i > 2 
})



const q = array.reduce((accumlator,currentValue)=>{
    return accumlator + currentValue
})

console.log(q)



