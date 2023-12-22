import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Twitter from "../../assets/Twitter.png";
import Tripadvisor from "../../assets/Tripadvisor.gif";
import PayPal from "../../assets/PayPal.jpeg";
import Razorpay from "../../assets/Razorpay.png";

function Footer() {
  const linkData = [
    { name: "Privacy Pollicy", link: "#" },
    { name: "Cancellation and Refund Policy", link: "#" },
    { name: "Terms and Conditions", link: "#" },
    { name: "FAQs", link: "#" },
    { name: "Contact Us", link: "#" },
  ];
  return (
    <section className="footer-section">
      <div className="container pt-3 mt-2">
        <div className="row justify-content-center ">
          <div className="col-lg-3 col-12 m-0 px-0 py-2">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-sub-text mb-1 ps-2">
              TEL:{" "}
              <a href="tel:+919810267719" aria-label="Call us">
                +91 98102 67719
              </a>
            </p>
            <p className="footer-sub-text mb-1 ps-2">
              <a href="tel:+919690132425" aria-label="Call us">
                +91 96901 32425
              </a>
            </p>
            <p className="footer-sub-text mb-1 ps-2">
              WhatsApp:{" "}
              <a href="https://wa.me/919810267719" aria-label="WhatsApp">
                +91 98102 67719
              </a>
            </p>
            <p className="footer-sub-text mb-1 ps-2">
              E-MAIL:{" "}
              <a href="mailto:delighted@dunagiri.com" aria-label="Email us">
                delighted@dunagiri.com
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-12 m-0 px-0 py-2">
            <h5 className="footer-heading">Address</h5>
            <p className="footer-sub-text mb-1 ps-2">
              Village Chari, Near Mahavatar Babaji's Cave, PO Dunagiri,
            </p>
            <p className="footer-sub-text mb-1 ps-2">
              Block Dwarahat, District Almora Uttarakhand, India{" "}
            </p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <div className="row mt-3 p-0 px-lg-3 mt-lg-0">
              <div className="col-lg-12 col-6 ">
                <h5 className="footer-heading text-start ps-1">Follow Us</h5>
                <div className="img-footer-wrap d-flex">
                  <img
                    src={Facebook}
                    className="img-fluid pe-3"
                    width={40}
                    height={40}
                    alt="Facebook"
                  />
                  <img
                    src={Instagram}
                    className="img-fluid pe-3"
                    width={40}
                    height={40}
                    alt="Instagram"
                  />
                  <img
                    src={Twitter}
                    className="img-fluid pe-3"
                    width={40}
                    height={40}
                    alt="Twitter"
                  />
                  <img
                    src={Tripadvisor}
                    className="img-fluid pe-3"
                    width={40}
                    height={40}
                    alt="Tripadvisor"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-6 mt-lg-4">
                <h5 className="footer-heading ps-1">We Accept</h5>
                <div className="img-footer-wrap d-flex">
                  <img
                    src={PayPal}
                    className="img-fluid pe-3"
                    width={55}
                    height={55}
                    alt="PayPal"
                  />
                  <img
                    src={Razorpay}
                    className="img-fluid pe-3"
                    width={55}
                    height={55}
                    alt="Razorpay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-start text-lg-center  mt-3 mt-lg-3 pt-3">
          <div className="row justify-content-center">
          {linkData.map((item) => (
            <div className="col-lg col-12 ">
              <Link to={item.link} className="footer-pageLink ff-f  pe-lg-1 py-5">
                {item.name}
              </Link>
            </div>
          ))}
          </div>
        </div>
        <div className="container m-0 mt-lg-2 pt-1 mb-lg-0">
          <p className="footer-last-text mt-3 mb-0 py-lg-4 py-3 ff-f text-center">
            © 2023 by DUNAGIRI RETREAT{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
