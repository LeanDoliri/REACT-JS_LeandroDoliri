import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useOutletContext, useParams } from "react-router-dom";
import { getProductDescription, getProductDetail } from "../services/Products";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [loading, setLoading] = useOutletContext ();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        Promise.all([getProductDetail(id), getProductDescription(id)])
            .then(results => {
                let item = results[0];
                item.description = results[1].plain_text
                if (mounted) {
                    setProduct(item);
                    setTimeout(() => {
                        setLoading(false)
                    }, 2000)
                }
            });
        return () => mounted = false;
    }, [id]);

    return(
        <div>
            {product ? <ItemDetail product={product} /> : null }
        </div>
    )
}

export default ItemDetailContainer;