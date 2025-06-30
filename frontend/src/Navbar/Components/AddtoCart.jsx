import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import pinapple from '../../assests/pinapple.webp';
import kiwi from '../../assests/Kiwi.webp'
import plum from '../../assests/plum.jpeg'
import cart from '../css/AddtoCart.module.css';

function AddtoCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pineapple Fruit Bowl [500 g]", price: 50, quantity: 1, image: pinapple },
    { id: 2, name: "kiwi Fruit Bowl2 [500 g]", price: 90, quantity: 1, image: kiwi },
     { id: 2, name: "Plums Fruit Bowl3 [500 g]", price: 100, quantity: 1, image: plum }
  ]);

  const increaseQuantity = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-4">
      {/* Banner */}
      <Row className="mb-3">
        <Col>
          <h5 className="text-success">Free delivery on Orders ₹350 & above</h5>
        </Col>
      </Row>

      {/* Header */}
      <Row className="mb-2 align-items-center">
        <Col xs={6}>
          <h5 className="mb-0">My Cart</h5>
        </Col>
        <Col xs={6} className="text-end">
          <p className="text-primary mb-0" style={{ cursor: 'pointer' }}>
            Continue browsing
          </p>
        </Col>
      </Row>

      <hr />

      <Row className={`mb-3 ${cart.cartItem}`}>
        {/* Cart Items */}
        <Col md={8}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt="product"
                    className={`img-fluid me-3 ${cart.image}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <p className="mb-1 fw-bold">{item.name}</p>
                    <p className="text-muted mb-2">₹{item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2 me-3"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <RiDeleteBinLine
                        size={20}
                        className="text-danger"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                </div>
                {index < cartItems.length - 1 && <hr className="w-75" />}
              </div>
            ))
          )}
        </Col>

        {/* Order Summary */}
        <Col md={4}>
          <h6>Order Summary</h6>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Estimation Charges</p>
            <p>₹0</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <p>Total</p>
            <p>₹{subtotal}</p>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-success w-100" disabled={cartItems.length === 0}>
              Checkout
            </button>
            <p className="text-muted mt-2 mb-0">Secure checkout</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddtoCart;
