import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dice from "./components/dice"
import {Container, Col, Row} from "reactstrap"


function App() {

  return (
    <div className="App bg-dark">
      <Container>
        <Row>
          <Dice xs="2"/>
        </Row>
         
      </Container>
    </div>
  );
}

export default App;
