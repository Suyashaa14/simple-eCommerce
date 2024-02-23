import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {" "}
      <Header />
      <div style={{ margin: "20px" }}>
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
    </>
  );
}

export default Products;
