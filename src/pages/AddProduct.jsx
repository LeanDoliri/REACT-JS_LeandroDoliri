import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddProduct = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const artist = e.target.elements.artist.value;
    const year = e.target.elements.year.value;
    const price = e.target.elements.price.value;
    const stock = e.target.elements.stock.value;
    const img = e.target.elements.img.value;
    const description = e.target.elements.description.value;

    addToFirebase(title, artist, year, price, stock, img, description);
  };

  const addToFirebase = async (
    title,
    artist,
    year,
    price,
    stock,
    img,
    description
  ) => {
    addDoc(collection(db, "items"), {
      title: title,
      artist: artist,
      year: year,
      price: price,
      stock: stock,
      img: img,
      description: description,
    })
      .then((doc) => {
        console.log("producto agregado. ID:", doc.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1 className="itemDetailTitle mt-3 p-2">Agregar Producto</h1>
      <Form className="mt-3" onSubmit={onSubmit}>
        <Form.Group className="" controlId="title">
          <Form.Control
            className="imputForm mt-2 me-2 mb-2"
            type="text"
            placeholder="Titulo"
          />
        </Form.Group>
        <Form.Group className="" controlId="artist">
          <Form.Control
            className="imputForm mt-2 mb-2"
            type="text"
            placeholder="Artista"
          />
        </Form.Group>
        <Form.Group className="" controlId="year">
          <Form.Control
            className="imputForm mt-2 mb-2"
            type="number"
            placeholder="Año"
          />
        </Form.Group>
        <Form.Group className="" controlId="price">
          <Form.Control
            className="imputForm mt-2 me-2 mb-2"
            type="number"
            placeholder="Precio"
          />
        </Form.Group>
        <Form.Group className="" controlId="stock">
          <Form.Control
            className="imputForm mt-2 mb-2"
            type="number"
            placeholder="Stock"
          />
        </Form.Group>
        <Form.Group className="" controlId="img">
          <Form.Control
            className="imputForm mt-2 mb-2"
            type="sting"
            placeholder="Portada"
          />
        </Form.Group>
        <Form.Group className="" controlId="description">
          <Form.Control
            as="textarea"
            className="imputForm mt-2 mb-2"
            rows={3}
            type="text"
            placeholder="Descripción"
          />
        </Form.Group>

        <Button className="btnAT hover mt-3" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
