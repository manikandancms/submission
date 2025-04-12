import { useState } from "react"

const Comment = () => {
    const [name, setName] = useState()
    const [comment, setComment] = useState()
    const [data, setData]=useState([] )

    //Object Optimizing or Reducing the field

    const [message, setMessage] = useState({ name: "", comment: "" })

    console.log("name:", name, "Message:", comment)


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen ">
                <p className="text-blue-600 text-5xl font-semibold leading-10">Comment Component</p>

                <div className="flex flex-col w-[300px] py-5">
                    <label htmlFor="name" className="text-pink-600 text-xl font-semibold leading-2">Name:</label>
                    <input type="text" id="name" className="border border-black" onChange={(e) => {
                       
                        setName(e.target.value)
                        // setMessage({name: e.target.value})
                        setMessage((items) =>{ 
                            return{...items, name: e.target.value}
                        });
                      
    }} />

                </div>

                <div className="flex flex-col w-[300px] py-5">
                    <label htmlFor="comment" className="text-pink-600 text-xl font-semibold leading-2">Comment:</label>
                    <textarea id="comment" className="border border-black " onChange={(e) => {
                       
                        setComment(e.target.value)
                        // setMessage({comment: e.target.value})
                        setMessage((items) => {
                            return{...items, comment: e.target.value}
                        });
                       
    }} ></textarea>

            </div>

            <button  className="text-white text-3xl font-semibold border border-black rounded-md bg-black p-1" onClick={()=>{
                return setData((items)=>[...items, message])
            }} >Submit</button>
            <br />
            <br />

            {JSON.stringify(message)}
            {JSON.stringify(data)}


        </div >


        </>
    )
}

export default Comment