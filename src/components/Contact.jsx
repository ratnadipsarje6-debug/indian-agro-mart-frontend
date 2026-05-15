import React from 'react';

/**
 * Contact information section listing the company's address, phone and email.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Contact Information
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Business Name:</span>{' '}
            Indian Agro Mart Enterprises
          </li>
          <li>
            <span className="font-semibold">Phone:</span>{' '}
            +91 74991 72574
          </li>
          <li>
            <span className="font-semibold">Email:</span>{' '}
            indiaagromart24@gmail.com
          </li>
          <li>
            <span className="font-semibold">Address:</span>{' '}
            Kallam Road, Relve Gate, Lakshmi Nagar, Latur, Maharashtra - 413531
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;