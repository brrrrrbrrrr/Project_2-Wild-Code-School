import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PageFilm.css";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slideImage1 from "../../assets/images/img_1.jpg";
import slideImage2 from "../../assets/images/img_2.jpg";
import slideImage3 from "../../assets/images/img_3.jpg";
import slideImage4 from "../../assets/images/img_4.jpg";
import slideImage5 from "../../assets/images/img_5.jpg";
import slideImage6 from "../../assets/images/img_6.jpg";
import slideImage7 from "../../assets/images/img_7.jpg";

function PageFilm() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slideImage1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </div>
  );
}

export default PageFilm;
