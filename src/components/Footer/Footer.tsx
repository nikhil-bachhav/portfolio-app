import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="p-3">
              &copy; {new Date().getFullYear()} Nikhil Bachhav - Portfolio App
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
