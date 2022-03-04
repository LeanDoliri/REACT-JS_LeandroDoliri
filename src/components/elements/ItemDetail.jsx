import React, { useState } from "react";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CartContext, CartProvider } from "../../contexts/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [itemQty, setItemQty] = useState(1);
  const { addCartItem } = useContext(CartContext);

  return (
    <CartProvider>
      <Container className="mt-3">
        <Row>
          <Col
            xs={5}
            className="d-flex justify-content-center align-itmes-center"
          >
            <img className="img-fluid rounded" alt={product.title} src={product.img} />
          </Col>
          <Col xs={5}>
            <h1 className="itemDetailTitle">
              {product.title} - {product.artist}
            </h1>
            <h3 className="itemDetailTitle">$ {product.price}</h3>
            <Container>
              <p className="itemDetailP mb-0">Cantidad</p>
              <ItemCount
                itemQty={itemQty}
                id={product.id}
                stock={product.stock}
                setItemQty={setItemQty}
              />
              <p className="itemDetailP">(Disponibles: {product.stock})</p>
              <Button
                onClick={() => addCartItem(product, itemQty)}
                className="btnAT mt-3 mb-0 ms-0 me-0 hover"
              >
                Comprar
              </Button>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 mb-3">
            <p className="itemDetailDescription p-3">
              <strong>Descripción:</strong>
              <br />
              {product.description}
            </p>
          </Col>
        </Row>
      </Container>
    </CartProvider>
  );
};

export default ItemDetail;
