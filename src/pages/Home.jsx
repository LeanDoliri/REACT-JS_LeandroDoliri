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
    let mounted = true;
    setLoading(true);
    getFromFirebase().then((products) => {
      if (mounted) {
        setProducts(products);
        setLoading(false);
      }
    });
    return () => (mounted = false);
  }, [getFromFirebase, setLoading]);

  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
};

export default Home;
