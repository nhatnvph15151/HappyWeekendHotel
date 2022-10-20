/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';;

// import required modules
import ActionAreaCard from "../Card";
type prop = {
    newsList: [],
    qualPerRow: any
}
export default function App({ newsList, qualPerRow }: prop) {
    return (
        <ActionAreaCard qualPerRow={qualPerRow} newsList={newsList} />
    );
}
