import { useState } from 'react'
import { Button, Form, Modal, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/pickyeats/register/', formData);
      console.log('Registration successful:', response.data);
      navigate('/login')
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      alert('Registration failed. Please check your details.');
    }
  };

  return (
    <>
      <Container className='border border-5 rounded w-25 mb-5 p-3' style={{ marginTop: '90px' }}>
        <Row closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Row>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label className='text-start'>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className='mt-3'>
            <Form.Label className='text-start'>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
            <Form.Group controlId="formMobile" className='mt-3'>
            <Form.Label className='text-start'>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className='d-flex gap-2 justify-content-end mt-4 mb-2'>
            <Button variant="secondary">
              Close
            </Button>
            <Button variant="primary" onClick={handleRegister}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Registration;
