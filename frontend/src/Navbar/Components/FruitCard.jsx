import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { addToCart } from "../../Dashboard/cartSlice";
import styles from "../css/Imported.module.css"; // change path if needed

const FruitCard = ({ name, img, rupees, product, onAddToCartGlobal, onImageClick }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const increase = () => {
    setQuantity(1);
    onAddToCartGlobal && onAddToCartGlobal();
    dispatch(addToCart(product));
    setAdded(true);
  };

  return (
    <Col className="mt-5 gap-2">
      <Card className="w-75 ms-5" style={{ height: "360px", overflow: "hidden" }}>
        {img && (
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "190px", objectFit: "cover" }}
            className={styles.imganimation}
            onClick={onImageClick}
          />
        )}
        <Card.Body>
          <Card.Text className="mt-4" style={{ fontSize: "12px" }}>
            {name}
          </Card.Text>
          <Card.Text>{rupees}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {quantity === 0 ? (
            <Button className="w-100" variant="success" onClick={increase}>
              Add to cart
            </Button>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <Button variant="outline-success" disabled className="w-100">
                <FaCheckCircle /> Added
              </Button>
            </div>
          )}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default FruitCard;
