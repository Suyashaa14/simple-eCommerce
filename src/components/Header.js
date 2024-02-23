import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        color: "#000",
        height: "3vh",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="logo">LOGO </div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            display: "flex",
          }}
        >
          <li style={{ marginRight: "20px" }}>
            <a
              href="/home"
              style={{
                color: "#000",
                textDecoration: "none",
                position: "relative",
              }}
            >
              Home
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "black",
                  display: "none",
                }}
              ></span>
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a
              href="/products"
              style={{
                color: "#000",
                textDecoration: "none",
                position: "relative",
              }}
            >
              Products
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "black",
                  display: "none",
                }}
              ></span>
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a
              href="/about"
              style={{
                color: "#000",
                textDecoration: "none",
                position: "relative",
              }}
            >
              About Us
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "black",
                  display: "none",
                }}
              ></span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
