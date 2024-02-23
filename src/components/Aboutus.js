import React from "react";
import Header from "./Header";

function AboutUs() {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div style={contentStyle}>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dolor felis. Vivamus id lacus ac velit ullamcorper posuere. Sed
          posuere eros ut placerat aliquet. Nullam non magna vel nisi
          consectetur dapibus. Fusce non mauris ultrices, vestibulum leo sed,
          ultrices ligula. Cras bibendum felis auctor consectetur dapibus. Fusce
          vitae urna non mauris viverra accumsan. Vestibulum vel mauris at purus
          ullamcorper tincidunt nec nec arcu. Curabitur ac massa tortor. Vivamus
          aliquam ligula at gravida fermentum. Vestibulum pulvinar, mi a viverra
          interdum, risus libero efficitur eros, sit amet pharetra libero nulla
          id ex. Proin placerat diam eget odio consequat lobortis. Nullam sit
          amet dolor id dolor faucibus aliquet.
        </p>
      </div>
    </div>
  );
}

const contentStyle = {
  padding: "20px",
  margin: "40px",
};

export default AboutUs;
