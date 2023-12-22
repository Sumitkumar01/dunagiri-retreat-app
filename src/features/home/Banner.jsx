import React from "react";
import "./styles/Banner.css";
import { HashLink as Link } from "react-router-hash-link";
import NavBar from "../navbar/NavBar";

function Banner() {
  const bannerData = [
    {
      headingName: "Dunagiri Retreat",
      bannerText: "Serenity,Divinity,Eternity.",
      bannerBtnName: "inquire now",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="banner d-flex align-items-center justify-content-center ">
        {bannerData.map((data, index) => {
          return (
            <div className="content-wraper" key={index}>
              <h1 className="banner-heading text-capitalize ff-f">
                {data.headingName}
              </h1>
              <p className="banner-text text-capitalize ff-l">
                {data.bannerText}
              </p>
              <br />
              <br />
              <div className="custom-link d-flex  ff-l text-uppercase">
                <Link  className="px-5 py-2" smooth to="#contact">
                  {data.bannerBtnName}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
