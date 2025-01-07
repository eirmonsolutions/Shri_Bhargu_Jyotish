"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Banner_Area = () => {


    const slideData = [
        {
            src: "/assets/images/banner-imgs/banner-1.png",
            alt: "Black Magic Removal by Ved Parkash Shastri",
        },
        
    ];


    return (
        <section className="banner-area">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-slide">
                            <Swiper
                                // direction="vertical"
                                slidesPerView={1}
                                spaceBetween={2}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                loop={true}
                                pagination={{ clickable: true }}
                                navigation={true}
                                modules={[Pagination, Autoplay]}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    600: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    480: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {slideData.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="banner-slide-box">
                                            <img
                                                src={slide.src}
                                                alt={slide.alt || `Slide ${index + 1}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner_Area;
