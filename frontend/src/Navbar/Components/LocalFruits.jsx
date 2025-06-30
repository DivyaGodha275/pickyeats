import React from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import papaya from '../../assests/Freshbar/papaya.jpg'
import papayabowl from '../../assests/Freshbar/papayabowl.avif'
import orange from '../../assests/orange.jpg';
import exotic from '../../assests/Freshbar/exotic.avif'
import tropical from '../../assests/Freshbar/tropical.avif'
import sunshine from '../../assests/Freshbar/medley.avif'
import watermelon from '../../assests/Freshbar/watermelon.webp'
import papayafruit from '../../assests/papaya.webp'
import pinapple from '../../assests/pinapple.webp';
import local from '../css/Local.module.css';



function FruitCard({ name, img, rupees }) {
  return (
    <Col className="mt-5 gap-2">
      <Card className="w-75 ms-5" style={{ height: "360px", overflow: "hidden" }}>
        {img && (
          <Card.Img
            variant="top"
            className={local.imganimation}
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

function Localfruits() {
  const fruits = [
     {id: 5,name: "KIWI Green (New Zealand) - 3pc Punnet",img: papayabowl,rupees: "170/-"},
    
    {id: 1,name: "Longan (Lychee/Litchi ) - 500g",img: exotic,rupees: "180/-",},
   
    
     { id: 3, name: "grapes (Imported) - (500g)", img: sunshine, rupees: "120/-" },
     { id: 3, name: "Plums (Imported) - (500g)", img: watermelon, rupees: "110/-" },
     { id: 3, name: "Papayafruit (Imported) - (500g)", img: papayafruit, rupees: "110/-" },
     { id: 3, name: "orange (Imported) - (500g)", img: orange, rupees: "110/-" },


   
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

export default Localfruits;
