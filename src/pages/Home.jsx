import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import ItemListContainer from "../components/sections/ItemListContainer";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [setLoading] = useOutletContext();
  const { getFromFirebase } = useContext(ProductContext);

  useEffect(() => {
    setLoading(true);
    getFromFirebase().then((products) => {
        setProducts(products);
        setLoading(false);
    });
  }, [setLoading, getFromFirebase]);

  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
};

export default Home;
