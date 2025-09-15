import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DetailsData from "./DetailsData";

const Details = () => {
  return (
    <div className="details">
      <Swiper
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          768: { slidesPerView: 3 },
        }}
      >
        {DetailsData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alter} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Details;
