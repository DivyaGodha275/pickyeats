import React, { useState } from "react";
import { Image, Row, Col } from "react-bootstrap";
import plums from "../../assests/plum.jpeg";
import { CiHeart } from "react-icons/ci";
import addtocart from "../css/Imageclick.module.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";

function Imageclick() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(false);

  const heart = () => [setColor(!color)];

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return (
    <div>
      <p className="mt-5 text-center">Home / Indian plums - (900-1000g)</p>
      <Row>
        <Col>
          <Image
            src={plums}
            className=" mt-3 mb-4"
            style={{ height: "470px", width: "400px", marginLeft: "300px" }}
          />
        </Col>
        <Col className={`justify-content-start ${addtocart.right}`}>
          <h5 className="text-start">Plums (Imported) - (400-500g)</h5>
          <h6 className="text-start mt-3">120/-</h6>
          <p className="text-start mt-3">Qunatity * </p>
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
          <button
            className={`mt-3 border border me-2 border-white ${addtocart.add}`}
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
      </Row>
    </div>
  );
}

export default Imageclick;
  