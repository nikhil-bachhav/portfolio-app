import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

interface FormValues {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    enquiryType: "General Inquiry",
    message: "",
  };

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // @ts-ignore
  const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      setShowSuccessAlert(true);
    }, 1000);
  };

  return (
    <Container id="contact" className="contact-form-container">
      <h2 className="form-title">Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Field
                type="text"
                placeholder="Enter your name"
                name="name"
                as={Form.Control}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Field
                type="email"
                placeholder="Enter your email"
                name="email"
                as={Form.Control}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </Form.Group>

            <Form.Group controlId="formEnquiryType">
              <Form.Label>Type of Enquiry</Form.Label>
              <Field
                as="select"
                name="enquiryType"
                className="form-control"
                component="select"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Sales">Sales</option>
              </Field>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Field
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                component="textarea"
                className="form-control"
              />
              <ErrorMessage name="message" component="div" className="error" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                marginTop: "20px",
                marginBottom: "50px",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>

            {showSuccessAlert && (
              <Alert
                variant="success"
                onClose={() => setShowSuccessAlert(false)}
                dismissible
              >
                Email sent successfully!
              </Alert>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;
