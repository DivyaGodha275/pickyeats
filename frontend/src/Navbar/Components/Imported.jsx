import React, { useState } from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imp from "../css/Imported.module.css";

import longon from "../../assests/longon.jpeg";
import orange from "../../assests/orange.jpg";
import plum from "../../assests/plum.jpeg";
import apple from "../../assests/apple.jpg";
import kiwi from "../../assests/Kiwi.webp";
import avcado from "../../assests/avcado.webp";
import blueberry from "../../assests/blueberry.webp";
import grapes from "../../assests/grapes.jpeg";
import papaya from "../../assests/papaya.webp";
import pinapple from "../../assests/pinapple.webp";

// ✅ FruitCard Component
function FruitCard({ name, img, rupees, onAddToCartGlobal, onImageClick }) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity((prev) => prev + 1);
    if (onAddToCartGlobal) {
      onAddToCartGlobal();
    }
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return (
    <Col className="mt-5 gap-2">
      <Card
        className="w-75 ms-5"
        style={{ height: "360px", overflow: "hidden" }}
      >
        {img && (
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "190px", objectFit: "cover" }}
            className={imp.imganimation}
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
          <div>
            {quantity === 0 ? (
              <Button className="w-100" variant="success" onClick={increase}>
                Add to cart
              </Button>
            ) : (
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="outline-danger" onClick={decrease}>
                  -
                </Button>
                <span>{quantity}</span>
                <Button variant="outline-success" onClick={increase}>
                  +
                </Button>
              </div>
            )}
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
}

// ✅ Imported component
function Imported({ onAddToCartGlobal }) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/imageclick");
  };

  const fruits = [
    { id: 1, name: "Longan", img: longon, rupees: "180/-" },
    { id: 2, name: "Baby Orange", img: orange, rupees: "120/-" },
    { id: 3, name: "Plums", img: plum, rupees: "110/-" },
    { id: 4, name: "Apple", img: apple, rupees: "190/-" },
    { id: 5, name: "Kiwi", img: kiwi, rupees: "170/-" },
    { id: 6, name: "Avocado", img: avcado, rupees: "140/-" },
    { id: 7, name: "Blueberry", img: blueberry, rupees: "160/-" },
    { id: 8, name: "Grapes", img: grapes, rupees: "120/-" },
    { id: 9, name: "Papaya", img: papaya, rupees: "80/-" },
    { id: 10, name: "Pineapple", img: pinapple, rupees: "40/-" },
  ];

  return (
    <Container>
      <Row>
        {fruits.map((fruit) => (
          <Col md={3} key={fruit.id}>
            <FruitCard
              name={fruit.name}
              img={fruit.img}
              rupees={fruit.rupees}
              onAddToCartGlobal={onAddToCartGlobal} // ✅ pass it here
              onImageClick={handleImageClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Imported;
