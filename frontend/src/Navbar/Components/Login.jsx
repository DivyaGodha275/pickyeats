import { useState } from 'react';
import {Button,Form,Modal,Col,Row} from 'react-bootstrap';


function Login({ show, handleClose }) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Username name</Form.Label>
            <Form.Control
           
                required
                type="text"
                placeholder="First name"
                
            />
            </Form.Group>
               <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>password</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter password"
                
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
export default Login;