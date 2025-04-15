
import Header from "./components/Header/Header"

import ProductLayout from "./components/ProductLayout/ProductLayout"

import Footer from "./components/Footer/Footer"

import HeroSection from "./components/HeroSection/HeroSection"

import Counter from "./components/Counter/Counter"

import Comment from "./components/Comment/Comment"

import Error from "./components/Error/Error"

import Error1 from "./components/Error/Error1"


import "./style.css"
import ReactDOM from "react-dom/client"

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails"








const AppLayout = () => {
    return (
        <>

            <Header />

            {/* if(path==="/" return <Home/>)
           if(path==="/counter" return <Counter/> )
           if (path==="/comment" return <Comment/>)   */}

            <Outlet />

            <Footer />






        </>
    )
};

const Home = () => {
    return (
        <>

            <HeroSection />

            <ProductLayout />

        </>

    )
}


const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
  


 

    children: [
        {
            path: "/",
            element: <Home />,


        },
        {
            path: "/counter",
            element: <Counter />,

        },
        {
            path: "/comment",
            element: <Comment />,
        },
        {
            path: "/products",
            element: <ProductLayout/>,
        },
        {
            path: "/product/:id",
            element: <ProductDetails/>
        }

    ],

    errorElement: <Error/>,

},
])




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />);

