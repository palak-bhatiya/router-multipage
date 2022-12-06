import './all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Wrapper = () => {
    return (
        <>
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
                </div>
            </div>
        </>
    )
}
export default Wrapper;