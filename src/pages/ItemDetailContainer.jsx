import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { ProductContext, ProductProvider } from "../contexts/ProductContext";
import ItemDetail from "../components/elements/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [setLoading] = useOutletContext();
  const [product, setProduct] = useState(null);
  const { getFromFirebase } = useContext(ProductContext);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getFromFirebase().then((products) => {
      if (mounted) {
        setProduct(products.find((item) => item.id === id));
        setLoading(false);
      }
    });
    return () => (mounted = false);
  }, [id, getFromFirebase, setLoading]);

  return (
    <ProductProvider>
      <div>{product ? <ItemDetail product={product} /> : null}</div>
    </ProductProvider>
  );
};

export default ItemDetailContainer;
