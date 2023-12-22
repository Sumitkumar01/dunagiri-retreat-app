import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import DunagiriLogo from "../../assets/DunagiriLogo.png";
import "./NavebarCss.css";
import { useState } from "react";
import MobileLogo from "../../assets/MobileLogo.png";
function NavBar() {
  const navigation = [
    { name: "ABOUT US", link: "/" },
    { name: "ACCOMODATION", link: "/" },
    { name: "RETREATS", link: "/" },
    { name: "ACTIVITIES", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-center py-1 desktop-nav">
        <div className="container d-flex justify-content-center">
          <div className="navItem d-flex">
            <Navbar.Brand to="/">
              <img src={DunagiriLogo} alt="logo" height={29} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="me-auto p-0 m-0">
                {navigation.map((item) => (
                  <Nav.Link as={NavLink} to={item.link} className="navtext ">
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <div className="d-flex align-items-center justify-content-around sm-screen-view">
        <div className="menu-toggle" onClick={handleClick}>
          {!open ? (
            <svg
              aria-hidden="true"
              role="presentation"
              className=""
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              role="presentation"
              className=""
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
            </svg>
          )}
          <span className="sr-only">Menu</span>
        </div>
        {open && (
          <div className={`menu-wrapper${open ? " open" : ""}`}>
            <nav>
              <ul className="menu-list">
                {navigation.map((item, index) => (
                  <li className="menu-item" key={index}>
                    <NavLink to={item.link} className="nav-link text-start">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        <div className="mobile-logo">
          <img src={MobileLogo} alt="mobile-logo" />
        </div>
        <div className="menu-toggle">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="38.999 39 122.001 122"
            viewBox="38.999 39 122.001 122"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
            aria-label="Call us at +919810267719"
          >
            <defs>
              <style>
                {`#comp-lpkayft8 svg [data-color="1"] {fill: #014235;}`}
              </style>
            </defs>
            <g>
              <path
                d="M66.248 47.383c2.234 0 4.783.813 6.746 3.742 5.289 7.88 10.39 15.304 13.215 20.359.956 1.715 1.884 6.569-1.238 10.083-2.696 3.029-5.074 3.772-6.511 5.984-.985 1.524-2.11 4.931-.259 8.848 2.213 4.678 4.913 8.52 10.838 14.54 6.018 5.917 9.859 8.615 14.546 10.829 1.53.722 2.984.99 4.276.99 2.019 0 3.647-.651 4.573-1.249 2.213-1.434 2.958-3.812 5.989-6.507 1.827-1.621 4.014-2.15 5.935-2.15 1.779 0 3.33.454 4.152.916 5.057 2.82 12.484 7.919 20.372 13.203 5.532 3.707 3.515 9.499 2.736 11.32-.783 1.821-4.788 7.847-13.4 12.352-2.37 1.239-5.497 1.974-9.288 1.974-11.935 0-30.424-7.304-52.356-29.225-28.895-28.88-32.402-51.787-27.261-61.607 4.506-8.61 10.536-12.613 12.36-13.392.854-.368 2.589-1.01 4.575-1.01zm0-8.383c-3.278 0-6.106.923-7.9 1.699C54.8 42.211 47.294 47.555 41.88 57.9c-6.765 12.922-3.295 39.381 28.762 71.419C98.22 156.883 118.998 161 128.929 161c5.024 0 9.457-.987 13.175-2.93 10.331-5.404 15.687-12.899 17.222-16.475 3.579-8.37 1.312-16.839-5.772-21.589-1.216-.813-2.421-1.623-3.606-2.42-6.566-4.414-12.769-8.585-17.35-11.141-2.239-1.252-5.244-1.975-8.238-1.977-4.382 0-8.36 1.473-11.504 4.264-2.088 1.855-3.389 3.574-4.34 4.827-.196.259-.44.582-.628.813h-.027c-.197 0-.43-.062-.694-.187-3.482-1.644-6.597-3.675-12.199-9.178-5.508-5.6-7.54-8.714-9.185-12.193-.152-.321-.191-.558-.189-.718.231-.188.557-.433.817-.63 1.255-.95 2.973-2.249 4.826-4.33 5.306-5.974 5.143-14.623 2.3-19.731-2.579-4.614-6.782-10.857-11.234-17.465-.772-1.148-1.557-2.312-2.346-3.487C76.736 41.648 71.866 39 66.248 39z"
                fill="#014235"
                data-color="1"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

export default NavBar;
