import React from "react";
import Form from "react-bootstrap/Form";
import logo from "./image/logo.png";
import Laptop from "./image/Rectangle.png";
import LineRec from "./image/lineRec.png";
import Rafiki from "./image/rafiki.png";
import Amico from "./image/amico.png";
import Dot from "./image/dot.png";
import Corona from "./image/corona.png";
import Button from "react-bootstrap/Button";
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
          <h2 className="second">OPTIMIZATION OF GLOBAL SUPPLY CHAIN</h2>
          <p className="third">
            OTIF is the next dimension of consolidation, orchestration, and
            optimization of the global supply chain networks, integrating
            different production enterprises and logistics providers for your
            convenience.
          </p>
          <Button className="btn" variant="outline-primary">
            START
          </Button>

          <img src={Laptop} alt="lap" className="laptop" />
        </div>

        <div className="navigation">
          <div className="screen1">Product</div>
          <div className="screen2">Use Cases</div>
          <div className="screen3">Resources</div>
          <div className="screen4">Company</div>
        </div>
      </div>

      <div className="linedot">
        <img src={LineRec} alt="LineRec" className="linerec" />
        <img src={Dot} alt="dot" className="dot" />
        <br />
        <img src={Dot} alt="dot2" className="dot" />
        <img src={LineRec} alt="LineRec2" className="linerec" />
      </div>

      <div className="cont1">
        <div className="ele1">
          <h2>Data Driven</h2>
          <p>
            We decided to use technology in logistics to habilitate transparent,
            data-driven, and easy decisions for your business. Our technology is
            your business’ competitive advantage. This brings decisions into the
            user’s hands. Users choose to their company’s convenience the times,
            prices, and modalities that they need and want.
          </p>
        </div>
        <div className="ele2">
          <img src={Rafiki} alt="raf" className="rafike" />
        </div>
      </div>

      <div className="linedot linedot_sec">
        <img src={LineRec} alt="LineRec" className="linerec" />
        <img src={Dot} alt="dot" className="dot" />
        <br />
        <img src={Dot} alt="dot2" className="dot" />
        <img src={LineRec} alt="LineRec2" className="linerec" />
      </div>
      <div className="cont3">
        <div className="ele3">
          <img src={Amico} alt="raf" className="rafike2" />
        </div>

        <div className="ele3 eld">
          <h2>Data Driven</h2>
          <p>
            We decided to use technology in logistics to habilitate transparent,
            data-driven, and easy decisions for your business. Our technology is
            your business’ competitive advantage. This brings decisions into the
            user’s hands. Users choose to their company’s convenience the times,
            prices, and modalities that they need and want.
          </p>
        </div>
      </div>

      <div className="linedot">
        <img src={LineRec} alt="LineRec" className="linerec" />
        <img src={Dot} alt="dot" className="dot" />
        <br />
        <img src={Dot} alt="dot2" className="dot" />
        <img src={LineRec} alt="LineRec2" className="linerec" />
      </div>
      <div className="cont1">
        <div className="ele1">
          <h2>Data Driven</h2>
          <p>
            We decided to use technology in logistics to habilitate transparent,
            data-driven, and easy decisions for your business. Our technology is
            your business’ competitive advantage. This brings decisions into the
            user’s hands. Users choose to their company’s convenience the times,
            prices, and modalities that they need and want.
          </p>
        </div>
        <div className="ele2">
          <img src={Corona} alt="raf" className="rafike" />
        </div>
      </div>

      <div className="foo">
        <div className="f1">
          <h2>If you Have any Questions Contact Us </h2>
          <p>
            OTIF bring together all the packages in mexico and the world. otif
            Products facilitate logistics for your company that operates on the
            internet or in person.Our services includes
          </p>
        </div>
        <div className="bt">
          <button>Request a quote</button>
        </div>
      </div>

      {/* <div className="footer">
        <div className="foot">products</div>
        <div className="foot">shipping</div>
        <div className="foot">International shipping</div>
        <div className="foot">parcels</div>
      </div> */}
    </div>
  );
};

export default Design;
