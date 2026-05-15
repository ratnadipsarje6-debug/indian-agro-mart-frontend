import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Benefits from '../components/Benefits';
import About from '../components/About';
import EnquiryForm from '../components/EnquiryForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Main landing page that combines all the public sections of the site.
 */
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <ProductCategories />
      <FeaturedProducts />
      <Benefits />
      <About />
      <EnquiryForm />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;