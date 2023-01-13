import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="heading">Client Testimonials</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        effect={"cards"}
        loop={true}
        grabCursor={true}
        className="mySwiper"
        slidesPerView={2}
        // navigation={true}
        //   pagination={{ clickable: true }}
        //  // scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="/assets/images/testimonial.png"
            className="testimonial-img"
            alt=""
          />
          <p className="review">
            We research extensively to build up your user personas. We make sure
            that we propose top-notch technology to deliver engrossing
            experiences that solves minor as well as major challenges.
          </p>
          <div className="testimonial-footer">
            <h2 className="company">CEO, Microsoft</h2>
            <img
              src="/assets/images/stars.png"
              className="review-stars"
              alt=""
            />
          </div>
          <p className="location">TX, USA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/testimonial.png"
            className="testimonial-img"
            alt=""
          />
          <p className="review">
            We research extensively to build up your user personas. We make sure
            that we propose top-notch technology to deliver engrossing
            experiences that solves minor as well as major challenges.
          </p>
          <div className="testimonial-footer">
            <h2 className="company">CEO, Microsoft</h2>
            <img
              src="/assets/images/stars.png"
              className="review-stars"
              alt=""
            />
          </div>
          <p className="location">TX, USA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/testimonial.png"
            className="testimonial-img"
            alt=""
          />
          <p className="review">
            We research extensively to build up your user personas. We make sure
            that we propose top-notch technology to deliver engrossing
            experiences that solves minor as well as major challenges.
          </p>
          <div className="testimonial-footer">
            <h2 className="company">CEO, Microsoft</h2>
            <img
              src="/assets/images/stars.png"
              className="review-stars"
              alt=""
            />
          </div>
          <p className="location">TX, USA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/testimonial.png"
            className="testimonial-img"
            alt=""
          />
          <p className="review">
            We research extensively to build up your user personas. We make sure
            that we propose top-notch technology to deliver engrossing
            experiences that solves minor as well as major challenges.
          </p>
          <div className="testimonial-footer">
            <h2 className="company">CEO, Microsoft</h2>
            <img
              src="/assets/images/stars.png"
              className="review-stars"
              alt=""
            />
          </div>
          <p className="location">TX, USA</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
