import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import At from "../../icons/At.svg"
import Location from "../../icons/Location.svg"
import Phone from "../../icons/Phone.svg"

const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <h2 className="col-header">Contact Us</h2>
            <ul>
              <li>
                <Link href="/">
                  <a className="footerLink"><Phone/> +92 300 1234567</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink"><At/> info@aventosolutions.com</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">
                   <Location/> HEADQUARTER 4124 Amir Divide Suite 635 OTHER OFFICES Lahore
                    London
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h2 className="col-header">Software Development</h2>
            <ul>
              <li>
                <Link href="/">
                  <a className="footerLink"> Web Development</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Mobile App Development</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Enterprise Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">
                  Business Consultancy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Data Analytics</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">SEO</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h2 className="col-header">Enterprise Solutions</h2>
            <ul>
              <li>
                <Link href="/">
                  <a className="footerLink">Team Augmentation</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Discovery Workshop</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Product Consulting</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Support and Maintenance</a>
                </Link>
              </li>
            </ul>
          </Col>
       
          <Col sm={12} md={6} lg={3}>
            <h2 className="col-header">Emerging Technologies</h2>
            <ul>
              <li>
                <Link href="/">
                  <a className="footerLink">SharePoint</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">MS Dynamics</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Privacy Policy </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footerLink">Recent Blog  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <p className="copyRight">© 2022 Avento Solutions</p>
      </Container>
    </div>
  );
};

export default Footer;
