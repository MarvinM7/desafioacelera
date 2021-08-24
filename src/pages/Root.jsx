import React from 'react';
import Header from '../layout/Header';
import { Container } from 'react-bootstrap';
import Home from './Home';

const Root = (props) => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Home />
      </Container>
    </div>
  )
}

export default Root;