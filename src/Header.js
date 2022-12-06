import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="main-nav">
                <div className="container">
                    <div className="nav-bar row justify-content-md-center justify-content-between">
                        <div className="main-menu col-4 d-lg-flex justify-content-around align-items-center d-none d-lg-block d-sm-none d-md-block d-md-flex">
                            <li><a href=""><i class="bi bi-search"></i></a></li>
                            <li>
                                <a href="/">
                                    {/* <Link to="home">home</Link> */}Home
                                </a>
                            </li>
                            <li>
                                <a href="/Menu">
                                    {/* <Link to="menu">menu</Link> */}Menu
                                </a>
                            </li>
                            <li>
                                <a href="/About">about
                                </a>
                            </li>
                        </div>
                        <div className="logo col-4 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">
                            <img src={require('./image/logo.jpg')} alt="" />
                        </div>
                        <div className="main-menu col-4 d-lg-flex justify-content-between align-items-center d-none d-lg-block d-sm-none d-md-block d-md-flex">
                            <li>
                                <a href="/notfound">404 page
                                </a>
                            </li>
                            <li>
                                <a href="contactus">contact us
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio">testimonial
                                </a>
                            </li>
                            <li><a href=""><i class="bi bi-person"></i></a></li>
                        </div>
                        <div className='col-auto d-sm-block d-md-none toggle'>
                            <a href="#">
                            <i class="bi bi-list"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;