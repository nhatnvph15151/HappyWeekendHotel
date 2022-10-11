/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';;

// import required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import Link from "next/link";
type prop = {
    module: any,
    slide: [],
    quantity: any
}
export default function App({ module, slide, quantity }: prop) {
    return (
        <div className="py-8">
            <Swiper
                navigation
                autoplay
                modules={module}
                className="mySwiper"
                loop
                loopFillGroupWithBlank
                slidesPerView={quantity}
                centeredSlides
            >
                {
                    slide.map((item: any, index: any) => {
                        return (
                            <div key={index} className="">
                                <SwiperSlide>
                                    {({ isActive }) => (
                                        <div className={`${isActive ? "w-full h-[550px] shadow-2xl" : "w-[85%] h-[400px]"} duration-300 select-none overflow-hidden border flex flex-col`}>
                                            <Link href="#">
                                                <img className="basis-1/2" src={item.src} alt="" />
                                            </Link>
                                            <div className="relative basis-1/2 p-4">
                                                <div className=" flex justify-between">
                                                    <h1 className="font-semibold">{item.name} <br /> <>{item.decript}</> </h1>
                                                    <p className="text-[green]">{item.price} đ</p>
                                                </div>
                                                <div className="">
                                                    ⭐⭐⭐⭐⭐
                                                </div>
                                                <div className="">
                                                    <button className={`${isActive ? "bg-[orange] text-white px-8 py-4 shadow-2xl" : "border border-[orange] text-[orange] px-4 py-2"} absolute bottom-5 left-[50%] min-w-[80%] translate-x-[-50%] hover:opacity-50 duration-150`}>Đặt phòng</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
