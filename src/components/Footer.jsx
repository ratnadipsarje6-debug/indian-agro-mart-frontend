import React from 'react';

/**
 * Simple footer displaying copyright information.
 */
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {year} Indian Agro Mart Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;