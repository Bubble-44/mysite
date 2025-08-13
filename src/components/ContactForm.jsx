import React, { useRef } from 'react';
import '../styles/contact-form.scss';
import emailjs from '@emailjs/browser';
import CodeEffect from './CodeEffect';
import { contactSegments } from './array';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_apupg8c', 'template_2fsnafr', form.current, 'Q130aadZAtPc0ZZEe')
      .then(() => alert('Message sent!'), () => alert('Failed to send message.'));
  };

  return (
    <div className="contact-form-wrapper">
      <div className="row g-4 align-items-start">
        {/* Left: Info (col-12 on small, col-6 on lg+) */}
        <div className="col-12 col-lg-6">
          <div className="phone-content-box contact-info-box px-4 py-3 h-100" style={{ backgroundColor: 'transparent' }}>
            <CodeEffect segments={contactSegments} speed={1} />
          </div>
        </div>

        {/* Right: Form (col-12 on small, col-6 on lg+) */}
        <div className="col-12 col-lg-6">
          <form ref={form} className="contact-form px-4" onSubmit={sendEmail}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <input type="text" name="first_name" className="form-control" placeholder="First Name" required />
              </div>
              <div className="col-12 col-md-6">
                <input type="text" name="last_name" className="form-control" placeholder="Last Name" required />
              </div>
              <div className="col-12">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="col-12">
                <textarea name="message" className="form-control" rows="5" placeholder="Write your message" required />
              </div>
              <div className="col-12">
                <button type="submit" className="primary-button">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;