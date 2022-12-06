import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Sliders } from 'react-bootstrap-icons';
const Slider = () => {
    return (
        <>
            <div className="slider">
                <OwlCarousel className='owl-theme' loop items={1} nav>
                    <div class='item'>
                        <img src={require('./image/slider-1.jpg')} alt="" />
                        <div className="slider-heading">
                            <span>restaurant</span>
                        </div>
                        <div className="slider-caption">
                            <p>Creative space for food  and recipes where you <br /> will find healthy culinary inspiration.</p>
                            <div className="btn">discover menu</div>
                        </div>
                    </div>
                    <div class='item'>
                        <img src={require('./image/slider-2.webp')} alt="" />
                        <div className="slider-heading">
                            <span>true taste</span>
                        </div>
                        <div className="slider-caption">
                            <p>From casual wine bars <br /> to opulent cocktail bars, <br /> here are the best places <br /> to grab a drink.</p>
                            <div className="btn">discover menu</div>
                        </div>
                    </div>
                    <div class='item'>
                        <img src={require('./image/slider-3.png')} alt="" />
                        <div className="slider-heading">
                            <span>best drink</span>
                        </div>
                        <div className="slider-caption">
                            <p>Offers an exquisite fine <br />dining experience in <br />the heart of the city.</p>
                            <div className="btn">discover menu</div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}
export default Slider;