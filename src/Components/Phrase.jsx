import React from 'react';
import { v4 } from 'uuid';
import Word from './Word';
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { GrDocumentSound } from "react-icons/gr";

function Phrase(props) {
  
    const words = props.phrase.text.split(" ");
    
    const playSentence = () => {
        new Audio(props.phrase.audio).play();

    }



    return (
        
            <Row className="mb-5">
                      <Col xs={1} className="align-self-end">
                        <Button onClick={playSentence} variant="warning">
                          <GrDocumentSound />
                        </Button>
                      </Col>
                      <Col className="pt-4" style={{ fontSize: "20px" }}>
                       
                          {words.map(w => <Word key={v4()} mot={w} />)}
                        
                      </Col>
                    </Row>
        
    );
}

export default Phrase;