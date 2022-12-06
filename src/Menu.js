import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';


function Menu() {
    return (
        <>
            <Header />
      <Slider/>
        <div className="menu-main-section">
            <div className="change-color">
                <div className="container">
                    <div className="menu-heading">
                        <h1>menu products</h1>
                    </div>
                    <div className="row">
                        <div className="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div class='item hover product-slider'>
                                <div className="image-section">
                                    <img src={require('./image/product-4.jpg')} alt="" />
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
                        </div>
                        <div className="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div class='item hover product-slider'>
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
                        </div>
                        <div className="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div class='item hover product-slider'>
                                <div className="image-section">
                                    <img src={require('./image/product-2.jpg')} alt="" />
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
                        </div>
                        <div className="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div class='item hover product-slider'>
                                <div className="image-section">
                                    <img src={require('./image/product-3.jpg')} alt="" />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />

        </>
    )
}

export default Menu;