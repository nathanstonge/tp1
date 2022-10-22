import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

function Image(props) {
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const newImageSrc = event.target.value;
    setImage(newImageSrc);
    props.addImage(newImageSrc);
    setImage("");
  };

  return (
    <div>
      <Form.Label as="h6">Source :</Form.Label>
      <Row>
        <Col>
          <Form.Control
            className="mb-3"
            type="file"
            onChange={handleChange}
            value={image}
          />
        </Col>
      </Row>{" "}
      <hr />
    </div>
  );
}

export default Image;
