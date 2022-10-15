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
import ActionAreaCard from "../Card";
type prop = {
    module: any,
    newsList: [],
    quantity: any,
    qualPerRow: any
}
export default function App({ module, newsList, quantity, qualPerRow }: prop) {
    return (
        <ActionAreaCard qualPerRow={qualPerRow} newsList={newsList} />
    );
}
