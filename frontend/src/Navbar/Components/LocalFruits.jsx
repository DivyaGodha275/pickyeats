// Imported.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import FruitCard from "./FruitCard"; // ✅ reusable component

function LocalFruits({ onAddToCartGlobal }) {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/pickyeats/products/")
      .then((res) => {
        const importedFruits = res.data
          .filter((item) => item.category === "local")
          .map((item) => ({
            id: item.id,
            name: item.pname,
            img: item.image,
            rupees: `${parseFloat(item.price).toFixed(2)}/-`,
            price: parseFloat(item.price),
          }));
        setFruits(importedFruits);
      });
  }, []);

  return (
    <Container>
      <h3 className="mt-4">LocalFruits</h3>
      <Row>
        {fruits.map((fruit) => (
          <Col md={3} key={fruit.id}>
            <FruitCard
              name={fruit.name}
              img={fruit.img}
              rupees={fruit.rupees}
              onAddToCartGlobal={onAddToCartGlobal}
              product={fruit}
              onImageClick={() => {}}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LocalFruits;
