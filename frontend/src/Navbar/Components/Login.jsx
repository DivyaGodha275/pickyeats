import { useState } from 'react';
import { Button, Form, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/pickyeats/login/', {
        username: username,
        password: password,
      });

      console.log('Login successful:', response.data);
      alert('Login Successful');
      // You can store token or navigate user here
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <Container className='border border-5 rounded w-25 mb-5' style={{ marginTop: '100px' }}>
        <Row>
          <h4 className='text-success mt-3'>Login Form</h4>
        </Row>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className='d-flex gap-2 justify-content-end mt-3 mb-2'>
            <Button variant="success" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Login;
