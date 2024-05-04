



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "As a freelance illustrator and Adobe Certified Instructor, I specialize in teaching Adobe Illustrator to students of all ages and skill levels. From basic drawing techniques to advanced vector artwork, my interactive lessons focus on practical skills that you can apply immediately. Let's work together to elevate your illustration skills with Adobe Illustrator!.",
    },
    {
      img: profilePic2,
      review:
        "With a background in art education and a passion for digital design, I offer engaging Adobe Illustrator tutorials tailored to your learning style and goals. Whether you're interested in creating logos, illustrations, or print designs, I provide step-by-step guidance to help you master Adobe Illustrator and unleash your creativity.",
    },
    {
      img: profilePic3,
      review:
       "sap abap: Identify enhancement points in the ABAP code where additional functionality can be added or customized. This could include validation checks, additional data processing logic, or integration with other SAP modules."
    },
    {
      img: profilePic4,
      review:
        "sap abap: Implement proper error handling mechanisms to catch and handle any exceptions that may occur during feedback processing. Log detailed error messages to help diagnose issues.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
