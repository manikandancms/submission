import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("data:", data.products);
      setProductData(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { productData, isLoading };
};

export default useFetchProducts;