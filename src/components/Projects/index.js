import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Link from "next/link";
import AndroidIcon from "../../icons/androidIcon.svg";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Projects = () => {
  return (
    <div className="projects-container">
      <Container>
        <h1 className="heading">We want to show you how we do it!</h1>
          <OwlCarousel
        className="owl-theme"
        loop
        items={1}
        nav={false}
        dots={true}
        margin={0}
        // center={true}
        navText={[
          "<div className='nav-btn prev-slide'><i className='fas fa-arrow-left'></i></div>",
          "<div className='nav-btn next-slide'><i className='fas fa-arrow-right'></i></div>",
        ]}
      >
        <div>
        <Row>
          <Col sm={12} md={4} lg={4} className="projectCard">
            <Link href="/" passHref>
              <img
                src="/assets/images/projectOne.png"
                alt=""
                className="projectImage"
              />
            </Link>
            <div className="project-footer">
              <div>
                <h1 className="project-title">Project Title</h1>
                <p className="project-category">Mobile App</p>
              </div>
              <img
                src="/assets/images/android-icon.png"
                alt=""
                className="project-technology"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
            <Link href="/" passHref>
              <img
                src="/assets/images/projectTwo.png"
                alt=""
                className="projectImage"
              />
            </Link>
            <div className="project-footer">
              <div>
                <h1 className="project-title">Project Title</h1>
                <p className="project-category">Mobile App</p>
              </div>
              <img
                src="/assets/images/angular-icon.png"
                alt=""
                className="project-technology"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
            <Link href="/" passHref>
              <img
               src="/assets/images/projectThree.png"
                alt=""
                className="projectImage"
              />
            </Link>
            <div className="project-footer">
              <div>
                <h1 className="project-title">Project Title</h1>
                <p className="project-category">Mobile App</p>
              </div>
              <img
                src="/assets/images/swift-icon 1.png"
                alt=""
                className="project-technology"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className="projectCard">
            <Link href="/" passHref>
              <img
                src="/assets/images/projectOne.png"
                alt=""
                className="projectImage"
              />
            </Link>
            <div className="project-footer">
              <div>
                <h1 className="project-title">Project Title</h1>
                <p className="project-category">Mobile App</p>
              </div>
              <img
                src="/assets/images/android-icon.png"
                alt=""
                className="project-technology"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
            <Link href="/" passHref>
              <img
                src="/assets/images/projectTwo.png"
                alt=""
                className="projectImage"
              />
            </Link>
            <div className="project-footer">
              <div>
                <h1 className="project-title">Project Title</h1>
                <p className="project-category">Mobile App</p>
              </div>
              <img
                src="/assets/images/angular-icon.png"
                alt=""
                className="project-technology"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
            <Link href="/" passHref>
              <img
                src="/assets/images/projectThree.png"
                alt=""
                className="projectImage"
              />
            </Link>
            <div className="project-footer">
              <div>
                <h1 className="project-title">Project Title</h1>
                <p className="project-category">Mobile App</p>
              </div>
              <img
                src="/assets/images/wordpress-icon 1.png"
                alt=""
                className="project-technology"
              />
            </div>
          </Col>
        </Row>
        </div>
        <div className="item">
        Item 2
        </div>
        <div className="item">
        Item 3
        </div>
    
      </OwlCarousel>
     
      </Container>
    </div>
  );
};

export default Projects;
