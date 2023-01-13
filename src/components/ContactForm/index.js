import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlaneOne from "../../icons/PlaneOne.svg";
import PlaneTwo from "../../icons/PlaneTwo.svg";
import Linked from "../../icons/Linked.svg";

const ContactForm = ({ info}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form-container">
      <Container>
        <h2 className="form-heading">Let&apos;s get started today!</h2>
        <p className="form-info">
          {info}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="planeOne">
            <PlaneOne />
          </div>
          <div className="planeTwo">
            <PlaneTwo />
          </div>
          <Row>
            <Col
              sm={12}
              md={6}
              lg={{ span: 4, offset: 2 }}
              className="form-row"
            >
              <input
                type="text"
                className="form-input"
                style={{ border: errors.name ? "1px solid #f80505" : "none" }}
                placeholder="Name"
                {...register("name", {
                  required: "This input is required.",
                  maxLength: 80,
                })}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="form-error">
                  First name is required
                </p>
              )}
              <input
                type="text"
                className="form-input"
                style={{ border: errors.email ? "1px solid #f80505" : "none" }}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Email is invalid",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="form-error">
                  Email is required
                </p>
              )}
              <input
                type="tel"
                className="form-input"
                placeholder="Contact Number"
                {...register("contact", { minLength: 6, maxLength: 12 })}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Company/Organization"
                {...register("company", { required: true, maxLength: 100 })}
              />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={{ span: 4, offset: 0 }}
              className="form-row"
            >
              <textarea
                type="text"
                className="form-input message"
                placeholder="Message"
                {...register("message", { required: true, maxLength: 100 })}
              />
            </Col>
          </Row>
          <Button type="submit" className="submit-btn">
            Send Message
          </Button>
        </form>
        <p className="connect">Connect with us <span/><Linked/></p>
      </Container>
    </div>
  );
};

export default ContactForm;
