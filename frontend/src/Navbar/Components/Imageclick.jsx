import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import addtocart from "../css/Imageclick.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Dashboard/cartSlice";

function Imageclick({ onAddToCartGlobal }) {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(false);

  const heart = () => setColor(!color);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
     onAddToCartGlobal();
    if (item) {
      dispatch(
        addToCart({
          id: item.id,
          name: item.name,
           image: item.img,
        price: parseInt(item.rupees),
        })
      );
      navigate("/cart"); // optional: take to cart page
    }
  };

  if (!item) {
    return <p className="mt-5 text-center">No product data available.</p>;
  }

  return (
    <div>
      <p className="mt-5 text-center">Home / {item.name}</p>
      <Row>
        <Col>
          <Image
            src={item.img}
            className="mt-3 mb-4"
            style={{ height: "470px", width: "400px", marginLeft: "300px" }}
          />
        </Col>
        <Col className={`justify-content-start ${addtocart.right}`}>
          <h5 className="text-start">{item.name}</h5>
          <h6 className="text-start mt-3">{item.rupees}</h6>
          <p className="text-start mt-3">Quantity *</p>
          <div className="text-start mt-3">
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={decrease}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm ms-2 me-3"
              onClick={increase}
            >
              +
            </button>
          </div>

          {/* ✅ Add to Cart Button */}
          <button
            className={`mt-3 border border-white ${addtocart.add}`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          {color ? (
            <BsHeartFill
              onClick={heart}
              className={`border p-1 mb-2 ms-2 ${addtocart.heart}`}
              style={{ color: "red", cursor: "pointer" }}
              size={24}
            />
          ) : (
            <BsHeart
              onClick={heart}
              className={`border p-1 mb-2 ms-2 ${addtocart.heart}`}
              style={{ color: "gray", cursor: "pointer" }}
              size={24}
            />
          )}
          <br />
          <button
            className={`mt-3 me-1 border border border-white bg-dark text-white ${addtocart.buy}`}
          >
            Buy Now
          </button>
        </Col>
        <Row>
          <p className="w-50 text-start ms-5">Refresh yourself with a baby spinach cold pressed [no water and no sugar] 
            Juice featuring baby spinach, apple, carrot and lemon. 
            This delightful blend offers a perfect balance of sweetness and
             tang, packed with vitamins and nutrients for a healthy boost.</p>
        </Row>
      </Row>
    </div>
  );
}

export default Imageclick;
