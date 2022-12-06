
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Wrapper from './Wrapper';
import Service from './Service';
import Productslider from './Productslider';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Footer from './Footer';


function Home() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Wrapper />
      <Service />
      <Productslider />
      <Contact />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default Home;
