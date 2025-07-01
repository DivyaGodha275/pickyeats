import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid>
      <Row className='border'>
        <Col>

        </Col>
        <Col>
        <h6>Download app</h6>
        </Col>
        <Col>
        <h6>Quick Links</h6>
        <a href="#"> Know More about Us</a><br />
        <a href="#">Visite Store</a>
        <a href="#">Lets Connect</a>
        <a href="#">Know our process</a>
        </Col>
        <Col>
        <h6></h6>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Footer