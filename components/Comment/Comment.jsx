import { useState } from "react";


const Comment = () =>{

        const [name, setName] = useState();
            const [comment, setComment] = useState(); 

            const [message, setMessage] = useState({
                name: "", message: ""
            });

            const [data, setData] = useState([])

            console.log("Name:",name, "Message:", comment)
    return(
        <>

           
<div className="flex flex-col justify-center items-center h-screen">
        <div className="py-5 flex flex-col w-[300px] ">
             <label htmlFor="name">Name:</label>
            <input className="border border-gray-900 rounded-lg hover:Enter your name" placeholder="Enter your name" type="text" id="name" onChange={(e)=>{
            console.log(e.target.value)

            setMessage((nam)=>{
                return{...nam, name:e.target.value}})
        }} />
       </div>

       <div className="py-5 flex flex-col w-[300px]">
         <label htmlFor="comment">Comment</label>
            <textarea  id="comment" className="border border-gray-900 rounded-lg" onChange={(e)=>{
           
                          setMessage((mes)=>{
                return{...mes, message:e.target.value}})
        
        }}  ></textarea>
        

       </div>

       <div>
        <button onClick={()=>{
            return setData((prev)=>[...prev,message])
        }} className=" border border-black rounded-md px-4 py-2 bg-violet-800 text-white hover:bg-violet-600  " >Submit</button>
       </div>
<div className="mt-4">
  <p><strong>Message:</strong> {JSON.stringify(message)}</p>
  <br/>
  <p><strong>Data:</strong> {JSON.stringify(data)}</p>
</div>
</div>
   

           


        </>
    )
        
    
}

export default Comment
