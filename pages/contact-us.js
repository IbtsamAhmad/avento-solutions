import React from "react";
import ContactForm from "../src/components/ContactForm";
import FindUs from "../src/components/FindUs";

const ContactPage = () => {
  return (
    <div className="contactPageContainer">
      <ContactForm
        info="Project description our motive is to bring your ideas to life! Avento
          solutions is here to help you get your work done as quickly as
          possible. Our general role is vital to the growth of effective
          communications."
      />
      <FindUs />
    </div>
  );
};

export default ContactPage;
