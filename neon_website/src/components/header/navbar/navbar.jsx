import "./navbar.css";

const Navbar = () => {
  return <div>

    <nav className="navbar">
        {/*  navbar__container */}
        {/* we write class in html and className in react */}
        <div className="navbar__container">
            {/* <!-- a#navbar__logo --> */}
            <a href="#home" id="navbar__logo"><p>NEON</p></a>
            {/* <!-- .navbar__toggle#mobile --> */}
            <div className="navbar__toggle" id="mobile-menu">
                {/* <!-- we put id to target js --> */}
                <span className="bar"></span>
                {/* <!-- first child --> */}
                <span className="bar"></span>
                {/* <!-- 2nd and 3rd --> */}
                <span className="bar"></span>
                {/* <!-- shift+alt+down = copy and paste --> */}
            </div>

            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#home" className="navbar__links" id="home-page">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#about" className="navbar__links" id="about-page">About</a>
                </li>
                <li className="navbar__item">
                    <a href="#services" className="navbar__links" id="services-page">Services</a>
                </li>
                <li className="navbar__btn">
                    <a href="#sign-up" className="button" id="signup">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>


  </div>;
};

export default Navbar;
