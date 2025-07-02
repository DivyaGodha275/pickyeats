import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../Dashboard/cartSlice';
import cart from '../css/AddtoCart.module.css';

function AddtoCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-4">
      <Row className="mb-3">
        <Col>
          <h5 className="text-success">Free delivery on Orders ₹350 & above</h5>
        </Col>
      </Row>

      <Row className="mb-2 align-items-center">
        <Col xs={6}>
          <h5 className="mb-0">My Cart</h5>
        </Col>
        <Col xs={6} className="text-end text-primary" style={{ cursor: 'pointer' }}>
          Continue browsing
        </Col>
      </Row>

      <hr />

      <Row className={`mb-3 ${cart.cartItem}`}>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`img-fluid me-3 ${cart.image}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <p className="fw-bold mb-1">{item.name}</p>
                    <p className="text-muted mb-2">₹{item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2 me-3"
                        onClick={() => handleIncrease(item.id)}
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
