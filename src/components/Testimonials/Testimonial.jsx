import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/amazon.png";
import profilePic2 from "../../img/Instagram_logo.png";
import profilePic3 from "../../img/linkedin2.png";
import profilePic4 from "../../img/dream.svg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Just I have created Amazon-clone using ReactJs and React-Native.To complete this clone I have used React Hooks,EventHandlings,RouterDom for UI design and Functionality ",
    },
    {
      img: profilePic2,
      review:
      "Just I have created Instagram-clone using ReactJs.To complete this clone I have used React Hooks,EventHandlings,RouterDom for UI design and Functionality ",
    },
    {
      img: profilePic3,
      review:
      "Just I have created Linked-In using React-Native.To complete this clone I have used React Hooks,EventHandlings,RouterDom for UI design and Functionality ",
    },
    {
      img: profilePic4,
      review:
      "Just I have created Dream-Focus using ReactJs.To complete this clone I have used React Hooks,EventHandlings,RouterDom for UI design and Functionality ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Projects details:-</span>
        <span>Compny and clone-project </span>
       
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
