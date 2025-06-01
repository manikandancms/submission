import "./style.css";

import ReactDom from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductLayout from "./components/ProductLayout.jsx/ProductLayout";










const App = () => {
  return (
    <>
      <Header />

      <ProductLayout />
     

      <Footer />

    
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
