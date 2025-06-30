import { useState } from 'react';
import {Button,Form,Modal,Col,Row} from 'react-bootstrap';


function Registration({ show, handleClose }) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registartion Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                
            />
            </Form.Group>
               <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder=" Last name"
                
            />
            </Form.Group>
                  <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="Enter mobile number"              
            />
            </Form.Group>
                  <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter Email Address"
                
            />
            </Form.Group>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Registration;