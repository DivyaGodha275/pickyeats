import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from '../../assests/logo.jpg'
import footer from '../css/Footer.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <Container fluid className={footer.main}>
      <Row className='border p-3'>
        <Col>
         <img src={logo} className='w-50 h-75'/>
         <h5 className='text-warning'> PICKY <span className='text-success'> EATES</span></h5>
        </Col>
        <Col>
        <h6>Download app</h6>
        </Col>
        <Col className='text-start'>
        <h6 >Quick Links</h6>
        <a href="#"> Know More about Us</a><br />
        <a href="#">Visite Store</a><br />
        <a href="#">Lets Connect</a><br />
        <a href="#">Know our process</a><br/>
        </Col>
        <Col className='text-start'>
        <h6>Site Links</h6>
        <a href='#' >privacy policy</a><br/>
        <a href='#' >Cancellation/Refund Policy</a><br/>
        <a href='#' >Terms & Conditions</a><br/>
        <a href='#' > Shipping Policy</a><br/>
        <a href='#' >privacy policy</a><br/>
        </Col>       
        <Col>
        <div className='d-flex gap-3 mt-3'>
          <FaFacebookSquare  className='text-primary fs-2'/>
          <FaTwitter className='text-primary fs-2' />
          <FaInstagram className='text-danger fs-2' />
        </div>
        <div className='text-start'>
          <a href="#">call us now</a><br/>
           <a href="#">+91- 9563319999</a><br/>
            <a href="#">support@picyeats.com</a><br/>
        </div>
        </Col>
        <Col></Col>
      </Row>
            <Row>
      <a
        href="https://wa.me/916304282771"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-25  ${footer.whatsappfloat}`}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      
            </Row>
    </Container>
  )
}

export default Footer