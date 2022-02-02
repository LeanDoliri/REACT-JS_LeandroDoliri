import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <Container className='d-flex justify-content-center'>
            <Spinner animation='border' role='status' className='m-5'>
                <span className='visually-hidden '>Cargando...</span>
            </Spinner>
        </Container>
    )
}

export default Loading;