import React, { useState, useEffect } from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imp from "../css/Imported.module.css";
import { FaCheckCircle } from "react-icons/fa";
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
import { useDispatch } from "react-redux";
import { addToCart } from "../../Dashboard/cartSlice";

// ✅ FruitCard Component
function FruitCard({
  name,
  img,
  rupees,
  onAddToCartGlobal,
  onImageClick,
  product,
}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const increase = () => {
    setQuantity(1);
    onAddToCartGlobal(); // ✅ trigger only when first added
    dispatch(addToCart(product));
    setAdded(true);
    console.log("Calling global add to cart");
  };
  useEffect(() => {
    console.log("FruitCard mounted with props:", { name, onAddToCartGlobal });
  }, []);

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
              <div className="d-flex justify-content-center align-items-center">
                <Button variant="outline-success" disabled className="w-100">
                  <FaCheckCircle /> Added
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
  console.log("Imported loaded, onAddToCartGlobal is:", onAddToCartGlobal);
  const navigate = useNavigate();


const handleImageClick = (fruit) => {
  navigate("/imageclick", { state: fruit });
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
              onAddToCartGlobal={onAddToCartGlobal} // ✅ confirm this is present
              product={{
                id: fruit.id,
                name: fruit.name,
                price: parseInt(fruit.rupees),
                image: fruit.img,
              }}
              onImageClick={() => handleImageClick(fruit)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Imported;
