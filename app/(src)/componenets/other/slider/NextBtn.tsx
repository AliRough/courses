import React from "react";
import { useSwiper } from "swiper/react";

export default function   NextBtn(props:any) {
  const swiper = useSwiper();
  return (
    <button className={props.className}  onClick={() => swiper.slidePrev()}> 
      {props.children}
    </button>
  );
}
