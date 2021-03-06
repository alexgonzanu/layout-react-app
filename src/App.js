import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="contenedor d-flex flex-column">
      <Row as="header" className="align-items-center text-white">
        <Col as="h1">Título</Col>
      </Row>
      <Row as="main">
        <Col xs={12} md={8} as="section">
          <h2>Titular</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit libero laboriosam amet vero
            veritatis
            ipsa ad
            nostrum aliquam alias nihil ratione quam error deserunt dolorem impedit perspiciatis, eum sint.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sequi autem consequatur illum!
            Deleniti
            dignissimos
            delectus molestiae asperiores iste vero accusamus optio iure. Debitis unde repudiandae cumque
            voluptas
            dolorum
            eveniet!
          </p>
        </Col>
        <Col xs={12} md={4} as="aside">
          <h2>Categorías</h2>
          <ul>
            <li>Noticias de deporte</li>
            <li>Noticias de ocio</li>
            <li>Noticias de política</li>
            <li>Noticias de espectáculo</li>
          </ul>
          <h2>Otras cosas</h2>
          <ul>
            <li>Nosequé</li>
            <li>Nosecuánto</li>
            <li>Talycual</li>
          </ul>
        </Col>
      </Row>
      <Row as="footer" className="justify-content-center align-items-center text-white pt-3">
        <Col as="p" className="text-center">Texto del footer</Col>
      </Row>
    </Container>
  );
}

export default App;
