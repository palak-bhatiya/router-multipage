import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './all.min.css';
const option1 ={
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
}
const Service = () => {
    return (
        <>
            <div className="service">
                <div className="container">
                    <div className="service-title">
                        <div className="service-icon"></div>
                        <div className="service-heading">our services</div>
                        <div className="service-subtitle">why choose us</div>
                    </div>
                    <OwlCarousel className='owl-theme row' {...option1} loop>
                        <div class='item'>
                            <div className="icon-one text-center">
                                <i class="fa-solid fa-bowl-food"></i>
                            </div>
                            <div className="icon-one-content">
                                <div className="icon-one-heading">Counter Service</div>
                                <div className="icon-one-par">
                                    <p>Customers line up at the counter to place and pay for their order. Each guest is assigned an order number that is called by the kitchen staff once it is ready.</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="icon-one text-center">
                                <i class="fa-solid fa-plate-wheat"></i>
                            </div>
                            <div className="icon-one-content">
                                <div className="icon-one-heading">Counter Service</div>
                                <div className="icon-one-par">
                                    <p>A good meeting or event starts with even better food. Ask for more details, as weare more than happy to help you select the perfect food selection.</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="icon-one text-center">
                                <i class="fa-solid fa-bowl-rice"></i>
                            </div>
                            <div className="icon-one-content">
                                <div className="icon-one-heading">Counter Service</div>
                                <div className="icon-one-par">
                                    <p>Please sit down, relax and enjoy our ultra-fresh dishes in one of our locations. Our staff will provide you with the best services provided</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="icon-one text-center">
                                <i class="fa-solid fa-car"></i>
                            </div>
                            <div className="icon-one-content">
                                <div className="icon-one-heading">Counter Service</div>
                                <div className="icon-one-par">
                                    <p>Feeling Lazy? No worries... We got you! Order at one of our locations, and we will roll up at your place with our delicious dishes.</p>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default Service;