import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/ForthSection.css";

function ForthSection() {
  const data = [
    {
      name: "Pragata",
      imgurl:
        "https://static.wixstatic.com/media/9c6671_4588634ebfff4608a7d721bfb22a70fa~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_493,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0343_JPG.jpg",
      experience: `"“Everything contributed to the full success of our Qi Gong retreat: the location, the superb rooms, the billions of flowers, the delicious food and all the staff.""`,
      country: "Portugal",
    },
    {
      name: "Miriam",
      imgurl:
        "https://static.wixstatic.com/media/9c6671_3e07df29286c4f3b897ab0f1383cc63f~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_493,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0398_JPG.jpg",
      experience: `“"They say when the gods want to meet they do so in the Himalayas. And I've experienced that...”`,
      country: "Netherlands",
    },
    {
      name: "Mokshananda",
      imgurl:
        "https://static.wixstatic.com/media/9c6671_7f45a7afd42f49128374d5555fca84f3~mv2.jpg/v1/crop/x_72,y_0,w_2855,h_4000/fill/w_493,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20230510_174347.jpg",
      experience: `“I traveled to the Himalayas where I can be absorbed in spiritual life...A natural rhythm evolved as relaxation and rejuvenation transpired.”`,
      country: "USA",
    },
  ];

  return (
    <section className="ForthSection ">
      <div className="container text-center mb-5">
        <h2 className="experience-heading ff-f">Guest Experiences</h2>
      </div>
      <div className="container">
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
          className="mySwiper"
        >
          {" "}
          {data.map((item) => (
            <SwiperSlide>
              <div className="slider-content row justify-content-center">
                <div className="col-5">
                <img src={item.imgurl} className="img-fluid sliderImg" alt="" />
                </div>
                <div className="slider-content-wrap col-5">
                  <p className="ff-f experience-text">{item.experience}</p>
                  <p className="ff-f name-text">
                    {item.name},{item.country}
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

export default ForthSection;
