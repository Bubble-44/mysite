import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_apupg8c',      // Replace with your EmailJS service ID
      'template_2fsnafr',     // Replace with your EmailJS template ID
      form.current,
      'Q130aadZAtPc0ZZEe'       // Replace with your EmailJS public key
    ).then(
      () => alert('Message sent!'),
      () => alert('Failed to send message.')
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-overlay" />
      <div className="container contact-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="contact-info-box px-4 py-3">
              <h2>Get in Touch</h2>
              <hr />
              <p>
                Ready to bring your web ideas to life? Or perhaps you’re 
                looking for a reliable developer to enhance your existing 
                online presence? Let’s connect! I’m always excited to discuss 
                new projects, explore collaborations, and help businesses like 
                yours thrive online.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <form ref={form} className="contact-form px-4" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="first_name" className="form-control" placeholder="First Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" name="last_name" className="form-control" placeholder="Last Name" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" rows="5" placeholder="Write your message" required></textarea>
              </div>
              <button type="submit" className="primary-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;