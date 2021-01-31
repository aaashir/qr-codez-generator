import React, { useState } from "react";
import "./Body.css";
import QRCode from "qrcode.react";
import { BsDownload } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";

function Body() {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("qrCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${input}_qr-codez.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const resetQR = () => {
    setInput("");
    setQrValue("");
  };

  const makeQRCode = (e) => {
    e.preventDefault();
    setQrValue(input);
    document.querySelector("input").blur();
  };

  return (
    <div className="body">
      <div className="body__heading">
        <p>
          Start creating QR CODEZ for <span>FREE</span>
        </p>
      </div>
      <div className="body__content">
        <div className="body__qrContainer">
          <QRCode id="qrCode" value={qrValue} size={200} />
        </div>
        <div className="body__input">
          <form onSubmit={makeQRCode}>
            <input
              value={input}
              placeholder="Enter anything to generate QR Code"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
          {qrValue ? (
            <div className="body__input_bottom">
              <div className="inputBottomItem">
                <BsDownload
                  onClick={downloadQR}
                  className="inputBottomButton"
                  size={25}
                />
                <p>Download</p>
              </div>

              <div className="inputBottomItem">
                <IoAdd
                  onClick={resetQR}
                  className="inputBottomButton"
                  size={25}
                />
                <p>Another</p>
              </div>
            </div>
          ) : (
            <p>press enter to generate</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
