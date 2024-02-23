import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  return (
    <>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {product ? (
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              margin: "10%",
              padding: "50px",
              maxWidth: "1000px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
              <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                {!addedToCart && (
                  <button
                    onClick={handleAddToCart}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "5px",
                      backgroundColor: "#333",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                )}
                {addedToCart && <p>Added to Cart!</p>}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
