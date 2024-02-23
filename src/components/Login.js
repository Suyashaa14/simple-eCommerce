import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="username"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              background: "#333",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
