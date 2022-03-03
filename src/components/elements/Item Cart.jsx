import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ItemCart = ({ id, title, artist, precio, qty, img, removeItemCart }) => {
  return (
    <Container fluid>
      <Card className="m-2" style={{ width: "100%" }}>
        <Card.Body>
          <Row>
            <Col xs={2}>
              <Card.Img className="img-fluid" src={img} />
            </Col>
            <Col className="flex-column">
              <p className="itemDetailTitle m-0 p-0">{title}</p>
              <p className="itemDetailSubTitle mt-3">{artist}</p>
            </Col>
            <Col xs={2} className="flex-column justify-content-ceter">
              <p className="mt-1 mb-1 itemSubTitle">Cantidad: {qty}</p>
              <p className="mt-0 itemTitle">
                <strong>$ {precio * qty}</strong>
              </p>
              <Button
                onClick={() => removeItemCart(id)}
                className="btnAT mt-0 mb-0 ms-0 me-0 hover"
              >
                Eliminar Producto
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemCart;
