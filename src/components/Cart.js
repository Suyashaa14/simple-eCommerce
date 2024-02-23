import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, onClose }) {
  const [items, setItems] = useState(cartItems);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const incrementQuantity = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCancel = () => {
    navigate("/home");
  };

  const handleBuyNow = () => {
    // Here you can place the order and perform any necessary actions
    setOrderPlaced(true);
  };

  const handleOK = () => {
    navigate("/home");
  };

  const handleAddToCart = () => {
    navigate("/products");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
        }}
      >
        <h2>Shopping Cart</h2>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "#888",
          }}
        >
          &times;
        </button>

        {items.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <p>Nothing in the cart</p>
            <button
              onClick={handleAddToCart}
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                background: "#333",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={handleCancel}
              style={{
                marginLeft: "10px",
                padding: "10px 20px",
                borderRadius: "5px",
                background: "#ccc",
                color: "#333",
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <ul style={{ padding: 0 }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <div>
                      <h3>{item.title}</h3>
                      <div>
                        <button onClick={() => decrementQuantity(item.id)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span style={{ margin: "0 10px" }}>
                          {item.quantity || 1}
                        </span>
                        <button onClick={() => incrementQuantity(item.id)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>${item.price}</div>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleBuyNow}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
              <button
                onClick={handleCancel}
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  background: "#ccc",
                  color: "#333",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}

        {orderPlaced && (
          <>
            <p style={{ textAlign: "center" }}>Order Placed Successfully!</p>
            <button
              onClick={handleOK}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                borderRadius: "5px",
                background: "#333",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
