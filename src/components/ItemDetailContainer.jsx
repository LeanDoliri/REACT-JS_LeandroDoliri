import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { ProductContext, ProductProvider } from "../contexts/ProductContext";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [loading, setLoading] = useOutletContext ();
    const [product, setProduct] = useState(null);
    const {productsDetails} = useContext(ProductContext);

    useEffect(() =>{        
        setProduct(productsDetails.find(item => item.id == id));    
    });

    return(
        <ProductProvider>
            <div>                       
                {product ? <ItemDetail product={product} /> : null}
            </div>
        </ProductProvider>
    )
}

export default ItemDetailContainer;