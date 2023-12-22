import React from "react";
import "./styles/FifthSection.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FifthSection() {
  const data = [
    {
      imgUrl:
        "https://static.wixstatic.com/media/9c6671_f5cbab3b21a240bfa896655c281f7938~mv2.jpeg/v1/fill/w_1074,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_f5cbab3b21a240bfa896655c281f7938~mv2.jpeg",
      heading: "Elevated Living",
      discription: `A "playground of well-being" nestled in the heart of the Himalayas, Dunagiri Retreat is devoted entirely to wellbeing. The campus offers a vast array of accommodations, yoga halls, meditation rooms, and experiences, such as hikes, yoga, sound healing, wilderness exploration, and more. `,
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/9c6671_494b2f709514485b8004b95fb66652ed~mv2.jpg/v1/fill/w_1074,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_494b2f709514485b8004b95fb66652ed~mv2.jpg",
      heading: "Yoga & Meditation",
      discription: `Retreat leaders and participants get access to our main Yoga Hall, which can host up to 40 people, our Pyramid Meditation Hall, a capacity of 20 people, and Babaji Temple, a capacity of 20 people.`,
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/9c6671_8e2794c148c149879d1ae7c411f4c54e.jpg/v1/fill/w_1074,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_8e2794c148c149879d1ae7c411f4c54e.jpg",
      heading: "Farm-Fresh Meals",
      discription: `Nourish your body with clean, locally sourced vegan meals developed by our local Chef. Our light and savory meals are included (at no extra charge) with each stay and are specially designed using Ayurvedic principles to support the multi-step detoxification process so you can leave feeling better than ever.`,
    },
  ];
  return (
    <section className="fifth-Section p-5">
      <div className="container text-center mb-5">
        <h2 className="fifth-section-heading ff-f">Why Choose Us</h2>
      </div>
      <div className="container ">
        <Swiper
          loop={true}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
          className="mySwiper "
        >
          {data.map((item, index) => (
            <SwiperSlide>
              <div className="row justify-content-center fith-slider-wrap  p-0" key={index}>
                <div className="img-div col-5 p-0">
                  <img src={item.imgUrl} className="img-fluid" alt="" />
                </div>
                <div className="fifth-section-content-wrap col-5 ">
                  <h2 className="fith-slider-heading ff-f">
                    <span>{index + 1}. </span>
                    {item.heading}
                  </h2>
                  <p className="fifth-slider-text ff-l">{item.discription}</p>
                  <br />
                  <p className="fifth-slider-text ff-l">
                    <Link to="#">Read More . . .</Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FifthSection;
