import React from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import papaya from '../../assests/Freshbar/papaya.jpg'
import detox from '../../assests/Freshbar/detox.jpg'
import detox2 from '../../assests/Freshbar/detox2.avif'
import spinach from '../../assests/Freshbar/spinachjuice.avif'
import papayabowl from '../../assests/Freshbar/papayabowl.avif'
import exotic from '../../assests/Freshbar/exotic.avif'
import tropical from '../../assests/Freshbar/tropical.avif'
import sunshine from '../../assests/Freshbar/medley.avif'
import watermelon from '../../assests/Freshbar/watermelon.webp'
import fresh from '../css/Freshfruits.module.css';

function FruitCard({ name, img, rupees }) {
  return (
    <Col className="mt-5 gap-2">
      <Card className="w-75 ms-5" style={{ height: "360px", overflow: "hidden" }}>
        {img && (
          <Card.Img
            variant="top"
            className={fresh.imganimation}
            src={img}
            style={{ height: "190px", objectFit: "cover" }}
          />
        )}
        <Card.Body>
          <Card.Text style={{ fontSize: "12px" }}>{name}</Card.Text>
          <Card.Text>{rupees} </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="w-100" variant="success">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}

function Freshfruits() {
  const fruits = [
    { id: 1, name: "avcado (Lychee ) - 500g", img: papaya, rupees: "140/-" },
     { id: 3, name: "grapes (Imported) - (500g)", img: sunshine, rupees: "120/-" },
    { id: 5,name: "pinapple Green (New Zealand) - 500g",img: detox,rupees: "40/-",},
    {id: 5,name: "watermelon Green (New Zealand) - 3pc Punnet",img: spinach,rupees: "40/-"},
    {id: 5,name: "KIWI Green (New Zealand) - 3pc Punnet",img: papayabowl,rupees: "170/-"},
    {id: 2,name: "Baby Orange (Mandarins) - 500g",img: detox2,rupees: "120/-",},
    {id: 1,name: "Longan (Lychee/Litchi ) - 500g",img: exotic,rupees: "180/-",},
    { id: 3, name: "Plums (Imported) - (500g)", img: tropical, rupees: "110/-" },
     { id: 3, name: "Plums (Imported) - (500g)", img: watermelon, rupees: "110/-" },
   
  ];

  return (
    <Container>
      <Row>
        {fruits.map((fruit, index) => (
          <React.Fragment key={fruit.id}>
            {index % 4 === 0 && index !== 0 && <div className="w-100"></div>}
            <Col md={3}>
              <FruitCard
                name={fruit.name}
                img={fruit.img}
                rupees={fruit.rupees}
              />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

export default Freshfruits;
