import { useState } from 'react';
import {Button,Form,Modal,Col,Row,Container} from 'react-bootstrap';


function Registration() {

  return (
    <>
      <Container className='border border-5 rounded w-25 ' style={{marginTop:'90px'}} >
        <Row closeButton>
          <Modal.Title>Registartion Form</Modal.Title>
        </Row>
        <div>
            <Form.Group md="4" controlId="validationCustom01">
            <p className='text-start'>First name</p>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                
            />
            </Form.Group>
               <Form.Group md="4" controlId="validationCustom01">
            <p className='text-start'>Last Name</p>
            <Form.Control
                required
                type="text"
                placeholder=" Last name"
                
            />
            </Form.Group>
                  <Form.Group md="4" controlId="validationCustom01">
            <p className='text-start'>Mobile Number</p>
            <Form.Control
                required
                type="number"
                placeholder="Enter mobile number"              
            />
            </Form.Group>
                  <Form.Group md="4" controlId="validationCustom01">
            <p className='text-start'>Enter Email</p>
            <Form.Control
                required
                type="text"
                placeholder="Enter Email Address"
                
            />
            </Form.Group>
        
        </div>
        <div className='d-flex gap-2 justify-content-end mt-2 mb-2'>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Submit
          </Button>
        </div>
      </Container>
    </>
  );
}
export default Registration;