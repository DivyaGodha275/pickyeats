import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Imported from './Imported';
import Localfruits from './LocalFruits';
import Freshfruits from './Freshfruits';
import Dryfruits from './Dryfruits';
import '@fortawesome/fontawesome-free/css/all.min.css';
import cards from '../css/Cards.module.css'

function Cards({onAddToCartGlobal}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    window.location.href = "/login";
  };


  return (
    <Container>
      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Welcome, Customer!</h2>
      <p className="mb-4">Browse and order fresh fruit bowls 🍓🍍🍌</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
      <Row className="mt-4">
        <Col className="d-flex gap-5 justify-content-center">
          <Link to="/imported"><Button variant="outline-success">Imported fruits</Button></Link>
          <Button variant="outline-success" onClick={() => navigate('/localfruits')}>Local fruits</Button>
          <Button variant="outline-success" onClick={() => navigate('/freshfruits')}>Fresh bar</Button>
          <Button variant="outline-success" onClick={() => navigate('/dryfruits')}>Dry fruits</Button>
        </Col>
      </Row>

      {/* These sections only show when on home page ("/") */}
     <Row className='mb-5'>
       <h4 className="mt-4">Imported Fruits</h4>
      <Imported onAddToCartGlobal={onAddToCartGlobal} />
      <h4 className="mt-4">Local Fruits</h4>
      <Localfruits />
      <h4 className="mt-4">Fresh Bar</h4>
      <Freshfruits />
      <h4 className="mt-4">Dry Fruits</h4>
      <Dryfruits />
     </Row>

    </Container>
  );
}

export default Cards;
