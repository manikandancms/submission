import React from "react";
import ReactDom from "react-dom/client";
import "./style.css"

//React Element
// const paragraphElement = React.createElement("p",null,"Hello React");

//JSX -->HTML OR XNK LIKE Syntax
//JSX-->BABEL --> React.createElement()-->JSON Object --> HTML
const paraElement = <p>Hello World JSX</p>
console.log(paraElement)//JSON

// Component
const Header = () => {
    return ( <div> 
        <p>Hello-Header</p>
        <p>Hello-Header</p>
        <p>Hello-Header</p>
        <p>Hello-Header</p>
        <p>Hello-Header</p>

        <p>Hello-Header</p>
        <p>Hello-Header</p>
        <p>Hello-Header</p>
        <p>Hello-Header</p>
        <p>Hello-Header</p>

        </div> )

}

const Footer = () =>{
    return (
        <>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>

           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
           <p>Hello-Footer</p>
        </>
    )
}

const Body = () =>{
    return (
        <>
        <p className="paragraph">Hello-body</p>
        <Header/>
        <Footer/>
        </>
    )
}

// function Headers(){
//     return <div><p>Hello test-1</p> <p>Hello New</p></div> 

// }


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Body/>);

