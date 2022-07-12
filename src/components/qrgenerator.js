import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

function Qrgenerator() {
    const [qrValue, setQrValue] = useState("https://linkbinary.com/");
    
    const handleOnChange = event => {
      const { value } = event.target;
      setQrValue(value);
    };
    const downloadQRCode = () => {
      // Generate download with use canvas and stream
      const canvas = document.getElementById("qr-gen");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  return (
    <div className="qr">
    <h1>QR Code Generator</h1>
    <input onChange={handleOnChange} placeholder="Eg. https://linkbinary.com/" />
    <br />
    <QRCode
      id="qr-gen"
      value={qrValue}
      size={300}
      level={"H"}
      includeMargin={true}
      bgColor="#d9d9d9"
      fgColor="#3D3B39"
      
    />
    <p>
      
      <button type="button" onClick={downloadQRCode}>
        Download QR Code
      </button>
    </p>
  </div>
  )
}

export default Qrgenerator