import React from "react";
import { FaTrash } from "react-icons/fa";
import {
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteImage } from "/src/redux.jsx";

function ImageAdded(props) {
  const dispatch = useDispatch();
const handleRemoveImage = () => {
    dispatch(deleteImage(props.image.id));
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
