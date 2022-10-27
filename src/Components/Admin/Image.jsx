import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addImage } from "/src/redux.jsx";

function Image(props) {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newImageSrc = event.target.value;
    setImage(newImageSrc);
  };

  const handleAddImage = () => {
    dispatch(addImage(image));
    setImage("");
  };

  return (
    <div>
      <Form.Label as="h6">Source :</Form.Label>
      <Row>
        <Col>
          <Form.Control
            name="images"
            placeholder="Entrez la source d'une image"
            className="mb-3"
            type="text"
            onChange={handleChange}
            value={image}
          />
        </Col>
      </Row>{" "}
      <Row className="mt-3">
        <Col className="text-center">
          <Button onClick={handleAddImage} variant="success" className="mb-1">
            <FaPlus size={16} /> Ajouter
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default Image;
