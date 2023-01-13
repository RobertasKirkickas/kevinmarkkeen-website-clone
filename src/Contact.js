import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
/* 
https://github.com/michalsnik/aos#animations
npm i aos --save
*/

const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
    return (
        <Form>
        <fieldset className="form-item fields name required">
          <legend className="title">
            Name
            <span className="required" aria-hidden="true">*</span>
          </legend>
          <div className="field-wrapper">
            <div className="field first-name">
            <Form.Group className="mb-3">
                <Form.Control type="text" name="fname" required />
                <Form.Label>First Name</Form.Label>
                </Form.Group>
            </div>
            <div className="field last-name">
            <Form.Group className="mb-3">
                <Form.Control type="text" name="lname" required />
                <Form.Label>Last Name</Form.Label>
                </Form.Group>
            </div>
          </div>
        </fieldset>
        <Form.Group className="field mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="field mb-3">
          <Form.Label>Subject *</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message *</Form.Label>
          <Form.Control as="textarea" rows="4" required />
        </Form.Group>
        <Button className="submit-button" variant="primary" type="submit">
    Submit
</Button>

      </Form>

    );
  };
  





export default Contact;

