import React from "react";
import { useSwiper } from "swiper/react";

export default function   PervBtn(props:any) {
  const swiper = useSwiper();
  return (
    <button className={props.className}  onClick={() => swiper.slideNext()}> 
      {props.children}
    </button>
  );
}
