import React from 'react';
import { Container } from 'react-bootstrap';

function Color(props) {
  return (
    <Container
      style={{
        backgroundColor: props.color,
        width: '100px',
        height: '100px',
      }}
    >
    <p style={{ textAlign: 'center' }}>{props.name}</p>
  </Container>
  );
}

export default Color;
