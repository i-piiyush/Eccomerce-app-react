import React, { useEffect, useState, useContext } from "react";
import Cards from "./Cards";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();

  // Get the category from the search query
  let categories = search.split("=")[1];
  categories = categories ? decodeURIComponent(categories) : "";

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductCategories = async () => {
    try {
      const { data } = await axios.get(`/products/category/${categories}`);
      setFilteredProducts(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (categories) {
      // If categories are provided, fetch the products for that category
      getProductCategories();
    } else {
      // If no category is provided, show all products
      setFilteredProducts(products);
    }
  }, [categories, products]);

  // Ensure that filteredProducts is checked before rendering Cards
  return filteredProducts ? (
    <>
      <Nav />
      <div className="w-[80%] h-full px-7">
        <h1 className="text-5xl font-bold p-5">Products</h1>
        <div className="flex w-full h-full bg-yellow overflow-x-hidden flex-wrap">
          {filteredProducts.map((p, i) => (
            <Cards
              title={p.title}
              price={p.price}
              key={i}
              image={p.image}
              id={p.id}
            />
          ))}
        </div>
        
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
