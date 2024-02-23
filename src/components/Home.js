import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <Header />
      <div class="container">
        <img
          src={require("../bannerimg.jpg")}
          alt="false"
          style={{ width: "100%", height: "300px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 style={{ zIndex: 1, color: "white", fontSize: "30px" }}>
            Welcome to my E-commerce Site
          </h1>
        </div>
      </div>
      <div style={{ margin: "40px" }}>
        <h2>Products</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              style={{
                width: "30%",
                marginBottom: "20px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                style={{
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px" }}>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
