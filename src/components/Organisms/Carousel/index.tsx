"use client";

import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
  slides: string[];
  className?: string;
}

export default function Carousel({ slides, className }: CarouselProps) {
  let [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);
  return (
    <div
      className={`overflow-hidden relative ${className} bg-black bg-opacity-15 backdrop-blur-sm rounded-lg`}
    >
      <div
        className={`flex  transition ease-out duration-500 translate-x-[-${
          current * 100
        }%]  `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides?.map((rows, index) => (
          <Image
            key={index}
            className={`w-full object-contain   rounded-lg `}
            src={rows}
            alt=""
            width={500}
            height={30}
          />
        ))}
      </div>
      <button
        onClick={previousSlide}
        className={`text-white px-1 py-2  active:text-opacity-50 absolute top-0 bottom-0 my-auto h-fit transition-all duration-75`}
      >
        <ArrowCircleLeft2 />
      </button>
      <button
        onClick={nextSlide}
        className={`text-white px-1 py-2 active:text-opacity-50  absolute top-0 bottom-0 my-auto h-fit right-0 transition-all duration-75`}
      >
        <ArrowCircleRight2 />
      </button>

      <div
        className={`absolute flex gap-2 bottom-0 mb-3 left-0 right-0 mx-auto  items-center justify-center `}
      >
        {slides?.map((rows, index) => (
          <Image
            key={index}
            onClick={() => {
              setCurrent(index);
            }}
            objectFit={"cover"}
            width={300}
            height={300}
            className={` rounded-lg w-12 h-12 object-cover ${
              current === index && "border-2 border-yellow-500"
            } transition-all duration-75 `}
            alt=""
            src={rows}
          />
        ))}
      </div>
    </div>
  );
}
