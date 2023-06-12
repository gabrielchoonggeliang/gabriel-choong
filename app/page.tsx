import React from 'react';
import './globals.css';

export default function HomePage() {
  return (
    <div>
      <section className="intro">
        <h1>Welcome to My Website!</h1>
        <p>Introduce your website and its purpose here.</p>
      </section>

      <section className="featured-content">
        <h2>Featured Content</h2>
        <p>This is some feature content. I need to put this in to test the padding.</p>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <p>Share some information about yourself and your expertise.</p>
      </section>

      <section className="services">
        <h2>Services</h2>
        <p>Describe the services you offer or the products you provide.</p>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>I have no idea what this section is all about but I&apos;m gonna put it in.</p>
      </section>

      <section className="cta">
        <h2>Get in Touch</h2>
        <p>Include a call-to-action to encourage visitors to contact you or take a specific action.</p>
      </section>

      <section className="social-media">
        <h2>Connect on Social Media</h2>
        <a href="#" target='_blank'>Link</a>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        {/* Provide your contact information */}
      </section>

    </div>
  );
}
