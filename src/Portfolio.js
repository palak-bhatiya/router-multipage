import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';


function Portfolio() {
    return (
        <>
        <Header />
      <Slider/>
            <div className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-4 small col-sm-12 col-lg-6 col-xl-4">
                            <div className="bg-color">
                                <div className="quote">
                                    <i class="bi bi-quote"></i>
                                </div>
                                <div className="testimonial-box">
                                    <p>Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.</p>
                                    <div className="testimonial-image">
                                        <img src={require('./image/asset 22.png')} alt="" />
                                    </div>
                                    <div className="testimonial-name">NIRBHAY SINGH <br />actuary </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 middle-image col-sm-12 col-lg-6 col-xl-4">
                            <img src={require('./image/asset 8.jpeg')} alt="" />
                        </div>
                        <div className="col-4 small col-sm-12 col-lg-6 col-xl-4">
                            <div className="bg-color">
                                <div className="quote">
                                    <i class="bi bi-quote"></i>
                                </div>
                                <div className="testimonial-box">
                                    <p>Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.</p>
                                    <div className="testimonial-image">
                                        <img src={require('./image/asset 23.png')} alt="" />
                                    </div>
                                    <div className="testimonial-name">NIRBHAY SINGH <br />actuary </div>
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
export default Portfolio