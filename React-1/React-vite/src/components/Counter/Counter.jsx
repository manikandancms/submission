import { useState } from "react"
import Footer from "../Footer/Footer";

const Counter = () => {

    let values = 10

    //Create Local State Variable
    let [value, setValue] = useState(0);
    let [Name, setName] = useState("Sam");
    const [Boolen, setBoolen] = useState(true);
    
    return (
        <>
           
         <div className="border border-red-600 py-5">
        <div className="space-x-4 ">
                <p>Number Value</p>
                <p>{value}</p>
            </div>
           
            <div className="space-x-4 p-5">
                <button onClick={()=>{
                    setValue(value + 1)
                     console.log(value)
                     }} 
                     className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">+</button>

                <button onClick={()=>{
                    setValue(0)
                    console.log(value)}} className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-4  focus:ring-yellow-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset</button>

                <button onClick={()=>{
                   setValue(value - 1)
                    console.log(value)}} className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">-</button>

            </div>


        </div>


        <div className="border border-red-600 py-5">
        <div className="space-x-4 ">
                <p>String Value</p>
                <p>{Name}</p>
            </div>
           
            <div className="space-x-4 p-5">
                <button onClick={()=>{
                    setName("Ram")
                    
                     }} 
                     className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Chamge Name
                     </button>

              
            </div>


        </div>


        <div className="border border-red-600 py-5">
        <div className="space-x-4 ">
                <p>Boolean Value</p>
                <p> {Boolen ?"🚀" : "❌"} </p>
            </div>
           
            <div className="space-x-4 p-5">
                <button onClick={()=>{
                    setBoolen(false)
                     
                     }} 
                     className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Change Emoji</button>

                
            </div>


        </div>

        

        

        </>
    )
}

export default Counter