import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';

function About() {
    return (
        <>
            <Header />
      <Slider/>
        <div className="about-section">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-5 m-20 m-md-auto text-center">
                            <div className="food-icon">
                                <i class="fa-solid fa-mug-hot"></i>
                            </div>
                            <div className="wrapper-titles">
                                <div className="wrapper-heading">Seasonal & Delicious Food Menus</div>
                                <div className="wrapper-subtitle">ENJOY AN EXCEPTIONAL</div>
                                <p className='wrapper-content'>Seasonal foods bring a variety of fruits, vegetables and meats to the table. Warm up this winter with a mug of hot apple cider and discover everything from terrific fall foods to refreshing summer recipes with the help of these seasonal menus.</p>
                                <div className="btn  d-none d-lg-block">discover menu</div>
                            </div>
                        </div>
                        <div className="col-4 d-none d-lg-block text-sm-center">
                            <img src={require('./image/asset 14.jpeg')} alt="" />
                        </div>
                        <div className="col-3 block-content d-none d-lg-block">
                            <div className="hours">
                                <div className="hour-subtitle">hours</div>
                                <div className="hour-content">Mon – Sat: 5a.m - 11p.m <br /> Sun: 7a.m – 11p.m</div>
                            </div>
                            <div className="location">
                                <div className="location-subtitle">location</div>
                                <div className="location-content">Delicioz Restaurant & Fine dining, <br /> 71 Madison Ave, New York, USA</div>
                            </div>
                            <div className="contact">
                                <div className="contact-subtitle">contact</div>
                                <div className="contact-content">+39-055-123456 <br /> +39-066-666999 <br />demo@demo.com </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p className='about-content'>The Perfect Place <br /> For An Exceptional <br /> Experience</p>
                        </div>
                        <div className="col-6">
                            <div className="about-right-content">
                                <p>By day, Delicioz provides a hub to meet friends and colleagues with a well-crafted wine list, discreet yet professional service and sophisticated menus all delivered in a relaxed setting.</p>
                                <p>By night the scene is set for any and all occasions. From intimate tables for two to small groups or larger private events. Our unparalleled attention to detail and strong focus on delivering the best culinary experiences is designed to exceed expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="row justify-content-evenly">
                            <div className="col-6">
                                <div className="about-image-one">
                                    <img src={require('./image/about-1.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="about-image-two">
                                    <img src={require('./image/about-2.jpg')} alt="" />
                                </div>
                                <div className="about-image-booking">
                                    <p className='about-first'>booking request</p>
                                    <p className='about-second'>+39-055-12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />

        </>
    )
}
export default About;