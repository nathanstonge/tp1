import React from "react";
import { FaTrash } from "react-icons/fa";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

function ImageAdded(props) {
const handleRemoveImage = () => {
    props.removeImage(props.image.id);
}
  return (
    <div>
      <Row>
        <Col>
          <p style={{ fontSize: "18px" }}>{props.image.src}</p>
        </Col>
        <Col>
          <Button onClick={handleRemoveImage} variant="danger">
            <FaTrash size={16} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ImageAdded;
