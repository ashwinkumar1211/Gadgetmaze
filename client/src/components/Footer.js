import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className='foo'>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; GADGETMAZE</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
