"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { MutableRefObject } from "react";
import type { KeenSliderPlugin, KeenSliderInstance } from "keen-slider/react";
import type { Image as ImageType } from "@/lib/types";

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active", "border-indigo-500");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active", "border-indigo-500");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

type Props = {
  images: ImageType[];
};

export const Gallery = ({ images }: Props) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 7,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );

  if (images.length === 1) {
    return (
      <div ref={sliderRef} className="keen-slider rounded-md aspect-square">
        {images.length > 0 &&
          images.map((image, idx) => {
            return (
              <Image
                key={image.url}
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`relative m-auto aspect-square object-contain keen-slider__slide slide-${idx}`}
                priority={idx === 0}
              />
            );
          })}
      </div>
    );
  }

  return (
    <>
      <div ref={sliderRef} className="keen-slider rounded-md">
        {images.length > 0 &&
          images.map((image, idx) => {
            return (
              <Image
                key={image.url}
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`relative m-auto aspect-square object-contain keen-slider__slide slide-${idx}`}
                priority={idx === 0}
              />
            );
          })}
      </div>

      <div
        ref={thumbnailRef}
        className="keen-slider flex flex-row overflow-x-auto mt-3"
      >
        {images.length > 1 &&
          images.map((image, idx) => {
            return (
              <div
                key={image.url}
                className={`keen-slider__slide slide-${idx} w-24 border hover:border-indigo-500 motion-safe:transition-colors motion-fase:duration-300 ease-in-out rounded-md cursor-pointer group aspect-square`}
              >
                <Image
                  key={image.url}
                  src={image.url}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="m-auto object-contain h-full w-full motion-safe:group-hover:scale-105 motion-safe:transition motion-reduce:duration-300 ease-in-out"
                  priority={idx === 0}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
