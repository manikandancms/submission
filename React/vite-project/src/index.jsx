
import Header from "./components/Header/Header"

import ProductLayout from "./components/ProductLayout/ProductLayout"

import Footer from "./components/Footer/Footer"

import HeroSection from "./components/HeroSection/HeroSection"

import Counter from "./components/Counter/Counter"

import Comment from "./components/Comment/Comment"



import "./style.css"
import ReactDOM from "react-dom/client"





const AppLayout = () => {
    return (
        <>

            {/* <Header />

            <HeroSection />

            <ProductLayout />

            
            <Counter/> */}

            <Comment/>

{/* 
            <Footer /> */}

        




        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)