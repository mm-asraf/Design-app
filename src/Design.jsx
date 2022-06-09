import React from "react";
import Form from "react-bootstrap/Form";
import logo from "./logo.png";
import "./design.css";

const Design = () => {
  return (
    <div>
      {/* top header */}
      <div className="header ">
        <li>help</li>
        <li>Sign In</li>
        <li>flag</li>
        <li>
          <Form.Select aria-label="Default select example">
            <option>English</option>
            <option value="1">Hindi</option>
            <option value="2">Urdu</option>
            <option value="3">Tamil</option>
          </Form.Select>
        </li>
      </div>

      {/* main comp */}
      <div className="main">
        <div className="logo">
          <img src={logo} alt="log" className="lg" />
          <div className="circle_b">
            <h1 className="t">T</h1>
            <h1 className="t_d">-</h1>
            <p className="line"></p>
            <p className="line2"></p>
            <p className="line3"></p>
            <div className="text">OTIF</div>
          </div>
          <div className="text2">ON TIME IN FULL</div>
          <div className="first">
            <p>OTIF Platform</p>
          </div>
          <div className="second">second</div>
        </div>

        <div className="navigation">
          <div className="screen1">Product</div>
          <div className="screen2">Use Cases</div>
          <div className="screen3">Resources</div>
          <div className="screen4">Company</div>
        </div>
      </div>
    </div>
  );
};

export default Design;
