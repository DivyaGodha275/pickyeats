import React from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import baadam from '../../assests/Freshbar/baadam.jpeg'
import anjeer from '../../assests/Freshbar/anjeer.jpeg'
import amlacandy from '../../assests/Freshbar/amlacandy.jpeg'
import blackkismiss from '../../assests/Freshbar/blackkismiss.jpeg'
import greenkismiss from '../../assests/Freshbar/greenkismiss.jpeg'
import pista from '../../assests/Freshbar/pista.jpeg'
import kaju from '../../assests/Freshbar/kaaju.jpeg'
import redkismiss from '../../assests/Freshbar/redkismiss.jpeg'
import yellowkismiss from '../../assests/Freshbar/yellowkismiss.jpeg'
import dry from '../css/Dryfruits.module.css';


function FruitCard({ name, img, rupees }) {
  return (
    <Col className="mt-5 gap-2">
      <Card className="w-75 ms-5" style={{ height: "360px", overflow: "hidden" }}>
        {img && (
          <Card.Img
            variant="top"
            className={dry.imganimation}
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


function Dryfruits() {
  const fruits = [
    { id: 1, name: "avcado (Lychee ) - 500g", img: blackkismiss, rupees: "140/-" },
     { id: 3, name: "grapes (Imported) - (500g)", img: kaju, rupees: "120/-" },
    { id: 5,name: "pinapple Green (New Zealand) - 500g",img: anjeer,rupees: "40/-",},
    {id: 5,name: "watermelon Green (New Zealand) - 3pc Punnet",img: greenkismiss,rupees: "40/-"},
    {id: 5,name: "KIWI Green (New Zealand) - 3pc Punnet",img: amlacandy,rupees: "170/-"},
    {id: 2,name: "Baby Orange (Mandarins) - 500g",img: pista,rupees: "120/-",},
    {id: 1,name: "Longan (Lychee/Litchi ) - 500g",img: baadam,rupees: "180/-",},
    { id: 3, name: "Plums (Imported) - (500g)", img: redkismiss, rupees: "110/-" },
     { id: 3, name: "Plums (Imported) - (500g)", img: yellowkismiss, rupees: "110/-" },
   
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

export default Dryfruits;
