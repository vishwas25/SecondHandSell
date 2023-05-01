import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const AboutUsScreen = () => {
  return (
    <div className="aboutbody">
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="aboutpage">
          <h1>Who are We?</h1>
          <p>
            Actually We are not any professionals. This website has been created
            for the purpose of aiding students for buying and selling the notes
            and other items that they no longer need which might be useful for
            other new students. We take no charge for this. What we do is just
            aid in establishing the communication between buyer and seller.These
            can include: notes, drawing instruments, utensils & furnitures
            specially by students who are on the verge of leaving campus sooner
            or later.
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="aboutpage1">
          <h1>Developer</h1>
          <p>
            Designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/vishwas-garade-179277218/"
              target="_blank"
            >
              Vishwas Garade
            </a>{" "}
          </p>
          <h3>Who am I?</h3>
          <p>
            I am Vishwas Garade. I am a native resident of Nagpur, Maharashtra.
            I am currently studying Information Technology (3rd year) at MITAOE,
            Alandi, Pune. There might be some bugs in this website as I am not
            any professional and currently a web developer in making.
          </p>
          <h3>Contact Details</h3>
          <i className="fas fa-phone"></i> 7219844782
          <br />
          <i className="fas fa-envelope-square"></i>{" "}
          <a target="_blank" href={`mailto:garadevishwas1@gmail.com`}>
            garadevishwas1@gmail.com
          </a>
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default AboutUsScreen;
