import React from "react";
import "./Header.css";
import QRCode from "qrcode.react";
import { IoMenu } from "react-icons/io5";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Menu from "./Menu";

function Header({ appVersion }) {
  return (
    <div className="header">
      <div className="header__left">
        <Popup
          trigger={
            <span className="header__menu_icon">
              <IoMenu size={24} />
            </span>
          }
          modal
        >
          <Menu appVersion={appVersion} />
        </Popup>
      </div>
      <div className="header__middle">
        <div className="header__icon">
          <a href="/">
            <QRCode className="header__qrCode" value="QR CODEZ" size={24} />
            <p className="header__title">QR CODEZ</p>
          </a>
        </div>
      </div>
      <div className="header__right">
        <h5>credits</h5>
      </div>
    </div>
  );
}

export default Header;
