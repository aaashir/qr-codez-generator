import React from "react";
import "./Menu.css";

function Menu({ appVersion }) {
  return (
    <div class="menu">
      <h2>QR CODEZ</h2>
      <h4>click anywhere to go back</h4>
      <div className="menu__content">
        <p>
          {/* eslint-disable-next-line */}
          <a href="#">API</a>
        </p>

        <p>
          {/* eslint-disable-next-line */}
          <a href="#">Usage</a>
        </p>

        <p>
          <a href="https://github.com/aaashir/qr-codez-generator">Github</a>
        </p>
      </div>
      <p className="appVersion">v{appVersion}</p>
    </div>
  );
}

export default Menu;
