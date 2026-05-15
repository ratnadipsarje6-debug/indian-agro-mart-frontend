import React from 'react';

/**
 * About section providing background information about the company.
 */
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At Indian Agro Mart Enterprises, we are dedicated to empowering
          farmers with state‑of‑the‑art equipment and exceptional service. With
          years of experience in the industry, we understand the challenges of
          modern agriculture and offer solutions to help you succeed.
        </p>
      </div>
    </section>
  );
};

export default About;