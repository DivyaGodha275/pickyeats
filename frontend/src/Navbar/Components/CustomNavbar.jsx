import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Badge,
} from "react-bootstrap";
import styles from "../css/CustomNavbar.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import logo from '../../assests/Freshbar/logo.jpg'


function CustomNavbar({ cartCount }) {
  const [totalCartCount, setTotalCartCount] = useState(0);

  const navigate = useNavigate();

const handleAdd = () => {
  
  navigate("/cart");              
};

  const handlelogin=()=>{
    navigate("/login")
  }
  const handleregister=()=>{
    navigate("/register");
  }
  

  const handleQuantityChange = (newQuantity, productId) => {
    
    setTotalCartCount(newQuantity); 
  };

  return (
    <div>
      <Container fluid>
        <Row className={styles.heading}>
          <Navbar expand="lg" className="mt-3">
            <Container fluid>
              <Navbar.Collapse id="navbarScroll">
                <Col>
                
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <img src={logo} style={{width:'50px',height:'50px'}} className=" ms-5" />
                    <Nav.Link href="/" className="ms-5">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#action2">Shop</Nav.Link>
                    <NavDropdown
                      title="Corporate Service"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="#action3">
                        Corporate Services
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Blog
                    </Nav.Link>
                    <Nav.Link href="#" disabled>
                      More
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col>
                  <h2 className="me-5 text-warning">
                    PICKY <span className="text-success">EATS</span>
                  </h2>
                  <spanp className="text-primary me-5">
                    <b>A Healthy Mantra</b>
                  </spanp>
                </Col>
                <Col className="d-flex">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-3 w-75"
                      aria-label="Search"
                    />
                  </Form>
                  <div style={{ position: "relative", marginRight: "20px" }}>
  <PiShoppingCartFill
    className="fs-3 text-success"
    onClick={handleAdd}
    style={{ cursor: "pointer" }}
  />
  {cartCount > 0 && (
    <Badge
      pill
      bg="danger"
      style={{
        position: "absolute",
        top: "-8px",
        right: "-10px",
        fontSize: "0.75rem",
      }}
    >
      {cartCount}
    </Badge>
  )}
</div>

                  <IoMdContact
                    className="fs-3 text-success"
                    style={{ marginRight: "10px", cursor: "pointer" }}
                  />

                  <p  style={{ cursor: "pointer" }} onClick={handlelogin} >
                    Login
                  </p>
                  
                  <p
                    onClick={handleregister}
                    className="ms-4"
                    style={{ cursor: "pointer" }}
                  >
                    Register
                  </p>
                  
                </Col>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
}

export default CustomNavbar;
