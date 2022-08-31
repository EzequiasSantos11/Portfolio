import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./AliceCarousel.module.css";

interface CarouselProps {
  children: React.ReactNode,
}

const responsive = {
  0: { items: 0},
  568: { items: 1 },
  1024: { items: 6 },
};

const Carousel = ({ children }: CarouselProps) => {
  return (
    <AliceCarousel
      mouseTracking
      infinite={true}
      responsive={responsive}
      paddingLeft={10}
      paddingRight={10}
      controlsStrategy="alternate"
    >
      {children}
    </AliceCarousel>
  )
};


export { Carousel };