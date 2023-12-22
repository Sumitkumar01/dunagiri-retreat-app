import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { LuThumbsUp } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./styles/LastSection.css";

function LastSection() {
  const contactData = {
    address:
      "Dunagiri Retreat, Village Chari, Near Mahavatar Babaji's Cave, Block, Dwarahat, Uttarakhand 263653 India",
    phoneNumber: "+919810267719",
    email: "delighted@dunagiri.com",
  };
  return (
    <>
      <section className="conteiner p-2">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 p-2 ">
              <div className="row flex-column p-0 m-0 align-items-center">
                <div className="container p-0">
                  <h2 className="contact-us-heading ps-lg-3 p-0 ff-f" id="contact">
                    Contact Us
                  </h2>
                </div>

                <div className="col-12 d-flex mb-2 p-0">
                  <div className="icon ">
                    <IoLocationOutline />
                  </div>
                  <div className="text">
                    <p className="address">{contactData.address}</p>
                  </div>
                </div>
                <div className="col-12 d-flex mb-2 p-0">
                  <div className="icon ">
                    <IoCallOutline />
                  </div>
                  <div className="text">
                    <p>{contactData.phoneNumber}</p>
                  </div>
                </div>
                <div className="col-12 d-flex mb-2 p-0">
                  <div className="icon ">
                    <GoMail />
                  </div>
                  <div className="text">
                    <p>{contactData.email}</p>
                  </div>
                </div>
                <div className="col-12 d-flex mt-2 justify-content-start">
                  <div className="social-icons px-3">
                    <LuThumbsUp className="fs-3" />
                  </div>
                  <div className="social-icons px-3">
                    <FaFacebook className="fs-3" />
                  </div>
                  <div className="social-icons px-3">
                    <FaInstagramSquare className="fs-3" />
                  </div>
                  <div className="social-icons px-3">
                    <FaLinkedin className="fs-3" />
                  </div>
                </div>
              </div>
            </div>
            {/* form section */}
            <div className="col-lg-4 col-md-12 col-sm-12 px-2 mt-4 mt-lg-0 py-1 m-0">
              <div className="row flex-column m-0">
                <div className="col-12 mb-1 ">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="fName" className="form-label ">
                        First Name
                      </label>{" "}
                      <input
                        id="fName"
                        className="form-control rounded-0"
                        type="text"
                      ></input>
                    </div>
                    <div className="col-6">
                      <label htmlFor="lName" className="form-label">
                        Last Name
                      </label>{" "}
                      <input
                        id="lName"
                        className="form-control rounded-0"
                        type="text"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-1">
                  <label
                    htmlFor="email"
                    className="form-label"
                    aria-required="true"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    className="form-control rounded-0"
                    type="email"
                    required
                  ></input>
                </div>
                <div className="col-12 mb-1">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="form-control rounded-0"
                    type="number"
                    required
                  ></input>
                </div>
                <div className="col-12 mb-1">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control rounded-0"
                    type="text"
                  ></textarea>
                </div>
                <div className="col-12 mb-1 d-flex justify-content-lg-end ">
                  <button className="px-5 py-1 button-text text-center">
                    SEND
                  </button>
                </div>
              </div>
            </div>
            {/* form section end */}
            {/* map */}
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577343.5001629111!2d79.23210232536051!3d30.87912006851932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7a7746dcda0f9%3A0x2c513d9a0ac5aacf!2sDunagiri!5e1!3m2!1sen!2sin!4v1703138444765!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map"
              />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default LastSection;
