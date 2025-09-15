import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperData from "./SwiperData";

const SelectHeadphones = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.2}
      breakpoints={{
        320: { slidesPerView: 1.1 },
        768: { slidesPerView: 1.2 },
      }}
    >
      {SwiperData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ background: slide.bg2 || slide.bg1 }} className="slide">
            <div className={slide.class}>
              <p className="desc">{slide.text}</p>
              <img src={slide.image} alt={slide.alter} className="swimg" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SelectHeadphones;
