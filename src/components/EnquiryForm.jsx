import React, { useEffect, useState } from 'react';

/**
 * Front‑end only enquiry form for capturing user details and message.
 * This component does not make any network requests — it simply shows an alert on submit.
 */
const EnquiryForm = () => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  product: '',
  message: '',
});
  // Loading and message states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
useEffect(() => {
  const selectedProduct = localStorage.getItem("selectedProduct");

  if (selectedProduct) {
    setFormData((prev) => ({
      ...prev,
      product: selectedProduct,
      message: `I want to purchase ${selectedProduct}`,
    }));
  }
}, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    // Basic validation: ensure name and phone are provided
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://indian-agro-mart-backend.onrender.com/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name, 
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          message: formData.message,
        }),
      });
      const text = await response.text();

let data = {};
try {
  data = JSON.parse(text);
} catch (error) {
  console.log("Response is not JSON:", text);
}
      if (response.ok) {
  setSuccessMsg('Enquiry submitted successfully');
const whatsappMessage = `New Enquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Product: ${formData.product}
Message: ${formData.message}`;

window.open(
  `https://wa.me/917499172574?text=${encodeURIComponent(whatsappMessage)}`,
  '_blank'
);
  setFormData({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
} else {
  setErrorMsg(data.message || 'Failed to submit enquiry.');
}
    } catch (err) {
      setErrorMsg('An error occurred while submitting your enquiry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Enquiry Form
        </h2>
        {/* Display success or error messages */}
        {errorMsg && (
          <p className="text-red-600 text-center mb-4 text-sm">{errorMsg}</p>
        )}
        {successMsg && (
          <p className="text-green-600 text-center mb-4 text-sm">{successMsg}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Your Name"
              />
            </div> 
            <div>
             <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
               required
               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
               placeholder="Your Email"
                 />
           </div>
            <div>
              <label className="block text-gray-700 mb-1">Mobile Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Your Mobile Number"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Product Interested In</label>
              <input
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Product Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-8 py-3 rounded hover:bg-green-700 transition-colors"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;