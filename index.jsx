import "./style.css";

import ReactDom from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductLayout from "./components/ProductLayout.jsx/ProductLayout";
import Value from "./components/Valule_Update/Valueupdate";
import Sample from "./components/Hooks/basichook";
import Comment from "./components/Comment/Comment";

import {
  createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { Children } from "react";
import Error1 from "./components/Error/Error1";










const App = () => {
  return (
    <>
      <Header />
{/* 
      if (path==="/" retrun <Home/>) 
      if (path==="/counter" retrun <Value/>)
        if (path==="/comment" retrun <Comment/>)
          if (path==="/demo" retrun <Sample/>)  */}
      
     <Outlet/>

      <Footer />

    

    
    </>
  );
};



const Home = () => {
  return (
    <>
 
      <ProductLayout />

    
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },


     {
    path: "/comment",
    element: <Comment />,
  },

     {
    path: "/counter",
    element: <Value/>,
  },

     {
    path: "/demo",
    element: <Sample/>,
  }
  
],

  errorElement: <Error1 />,
  },


 
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);  
