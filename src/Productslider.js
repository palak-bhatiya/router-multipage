import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sliders } from 'react-bootstrap-icons';

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


const Productslider = () => {
    return (
        <>
            <div className="product-slider">
                <div className="container">
                    <div className="service-title">
                            <i class="fa-solid fa-spoon"></i>
                        <div className="service-heading">our products</div>
                        <div className="service-subtitle">new product available</div>
                    </div>
                    <OwlCarousel className='owl-theme' loop={true} {...option1} nav={true} dots={false} autoplay row>
                        <div class='item hover col-3'>
                            <div className="image-section">
                                <img src={require('./image/product-1.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Sashimi Sushi Set</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$9.00</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item col-3'>
                            <div className="image-section">
                                <img src={require('./image/product-2.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Verduras Con Olivada</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$29.00</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item col-3'>
                            <div className="image-section">
                                <img src={require('./image/product-3.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Steamed Lobster</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$12.90</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item col-3'>
                            <div className="image-section">
                                <img src={require('./image/product-4.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Paella Mixta</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$24.84</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="image-section">
                                <img src={require('./image/product-5.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Grilled Beef Steak</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$9.00</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="image-section">
                                <img src={require('./image/product-6.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Spaghetti Pasta</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$19.12</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="image-section">
                                <img src={require('./image/product-7.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Tokusen Wagyu</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$13.90</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="image-section">
                                <img src={require('./image/product-8.jpg')} alt="" />
                            </div>
                            <div className="product-meta">
                                <ul class="product-flags">
                                    <li class="product-flag new">New</li>
                                </ul>
                                <h3 className="product-title">
                                    <a href="#">Olivas Rellenas</a>
                                </h3>
                                <div className="star-content">
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="star">
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="product-price-and-shipping">
                                    <div className="price">$34.71</div>
                                </div>
                            </div>
                            <div className="button-contanier">
                                <div className="btn btn-product add-to-cart">
                                    <div className="button-content">
                                        <i class="fa-solid fa-lock"></i> 
                                        <span class="name-btn-product"> Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default Productslider;