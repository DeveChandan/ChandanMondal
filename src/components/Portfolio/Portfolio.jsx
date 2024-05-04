import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            src={Sidebar}
            alt=""
            onClick={() => handleImageClick(Sidebar)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Ecommerce}
            alt=""
            onClick={() => handleImageClick(Ecommerce)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={MusicApp}
            alt=""
            onClick={() => handleImageClick(MusicApp)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" onClick={() => handleImageClick(HOC)} />
        </SwiperSlide>
      </Swiper>

      {/* Popup */}
      {selectedImage && (
        <div className="popup">
          <img src={selectedImage} alt="" />
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
