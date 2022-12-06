import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';

function Contactus() {
    return (
        <>
            <Header />
      <Slider/>
        <div className="contactus-page">
            <div className="container">
                <div className="contact-us-heading">contact us</div>
                <div className="contact-form">
                    <div className="spacing">
                        <form>
                            <div class="form-group d-flex">
                                <label for="exampleFormControlSelect1">Customer Service</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Customer Service</option>
                                    <option>Webmaster</option>
                                </select>
                            </div>
                            <div class="form-group d-flex">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group d-flex">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group d-flex">
                                <label for="exampleInputtextarea1">Message</label>
                                <textarea class="form-control" id="exampleInputtextarea1" cols="0" rows="4"></textarea>
                            </div>
                            <button type="submit" class="btn bg-transperent">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      <Footer />

        </>
    )
}
export default Contactus;