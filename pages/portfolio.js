import React from 'react'
import Customers from '../src/components/Customers';
import Projects from '../src/components/Projects'
import ContactForm from "../src/components/ContactForm";

const Portfolio = () => {
  return (
    <div className='portfolioContainer'>
    <Projects/>
    <Customers/>
    <ContactForm
        info="Project description our motive is to bring your ideas to life! Avento solutions is here to help you get your work done as quickly as possible."
      />
    </div>
  )
}

export default Portfolio;