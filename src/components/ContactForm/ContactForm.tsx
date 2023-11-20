import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./ContactForm.css"; // Import a CSS file for custom styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can perform further actions like sending the form data to an API
  };

  return (
    <Container id="contact" className="contact-form-container">
      <h2 className="form-title">Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEnquiryType">
          <Form.Label>Type of Enquiry</Form.Label>
          <Form.Control
            as="select"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleInputChange}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Sales">Sales</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
