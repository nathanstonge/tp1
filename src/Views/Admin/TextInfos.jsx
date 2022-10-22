import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Image from "../../Components/Admin/Image";
import Sentence from "../../Components/Admin/Sentence";
import Question from "../../Components/Admin/Question";
import { v4 } from "uuid";
import ImageAdded from "../../Components/Admin/ImageAdded";
import SentenceAdded from "../../Components/Admin/SentenceAdded";

function TextInfos(props) {
  const [images, setImages] = useState([]);

  const [sentences, setSentences] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleAddImage = (imageScr) => {
    const newImage = {id:v4(), src: imageScr};
    setImages((prevValue) => {
      return [...prevValue, newImage];
    });
  };
  const handleRemoveImage = (id) => {
    setImages(prevValues => {
      return prevValues.filter(i => {
        return i.id != id;
      });
    });
   
  };

  const handleAddSentence = (sentence) => {
    const newSentence = {id:v4(), text: sentence.text, audio: sentence.audio};
    setSentences((prevValue) => {
      return [...prevValue, newSentence];
    });
  };
  const handleRemoveSentence = (id) => {
    setSentences(prevValues => {
      return prevValues.filter(img => {
        return img.id != id;
      });
    });
  }

  return (
    <div>
      <Button
        as={Link}
        to="/main-admin"
        variant="primary"
        style={{ left: "50px", top: "50px", position: "absolute" }}
      >
        <BiArrowBack /> Retour
      </Button>
      <Container style={{ marginTop: "150px" }}>
        <Form>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Row>
                <Col>
                  <Form.Label as="h1">Titre :</Form.Label>
                </Col>
                <Col xs={10} className="pt-2">
                  <Form.Control
                    placeholder="Entrez le titre"
                    required
                    className="mb-2"
                    type="text"
                  />
                </Col>
              </Row>
              <Card className="mt-4">
                <Card.Header as="h2"> Images </Card.Header>
                <Card.Body className="p-4">
                  <Image addImage={handleAddImage} />

                  <Row className="mt-3">
                    <Col>
                    
                        {/* {images.map((i) => (
                          <tr key={v4()}>
                            <td>
                              <label>{i}</label>
                            </td>
                            <td>
                              <Button variant="danger">
                                <FaTrash size={16} />
                              </Button>
                            </td>{" "}
                          </tr>
                        ))} */}
                        {images.map(i => <ImageAdded key={i.id} removeImage={handleRemoveImage} image={i} />)}
                      
                      
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Header as="h2">
                  {" "}
                  Phrases{" "}
                  
                </Card.Header>
                <Card.Body className="p-4">
              <Sentence addSentence={handleAddSentence}/>
              <hr />
              {sentences.map(s => <SentenceAdded key={s.id} sentence={s} sentences={sentences} setSentences = {setSentences} removeSentence={handleRemoveSentence}/>)}
                </Card.Body>
              </Card>
              

              
             

              <Question />
              <Question />
              <Question />
              <Question />
              
              <Row className="text-end mb-5 mt-4">
                <Col>
                  <Button variant="primary">Valider</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default TextInfos;
