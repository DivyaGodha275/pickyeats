import { useState } from 'react';
import {Button,Form,Modal,Col,Row,Container} from 'react-bootstrap';


function Login() {

  return (
    <>
      <Container className='border border-5 rounded w-25 ' style={{marginTop:'100px'}}>
        <Row >
          <h4 className='text-success mt-3'>Login Form</h4>
        </Row>
        <div>
            <Form.Group md="4" controlId="validationCustom01">
            <p className='text-start'>Username name</p>
            <Form.Control
                required
                type="text"
                placeholder="user name"
                
            />
            </Form.Group>
               <Form.Group md="4" controlId="validationCustom01">
            <p className='text-start'>password</p>
            <Form.Control
                required
                type="text"
                placeholder="Enter password"
                
            />
            </Form.Group>
        
        </div>
        <div className='d-flex gap-2 justify-content-end mt-2 mb-2'>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary">
            Login
          </Button>
        </div>
      </Container>
    </>
  );
}
export default Login;