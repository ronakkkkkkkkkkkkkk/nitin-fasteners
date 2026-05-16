"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SplitPinsPage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#1e40af]"></div>

      {/* PARALLAX */}
      <img
        src="/split pins.webp"
        alt=""
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-10
        "
        style={{
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex flex-col
          items-center
          justify-start md:justify-center
          min-h-[100svh]
          px-4 md:px-2
          pt-20 md:pt-28
          pb-24
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-white
            text-[42px] sm:text-[52px] md:text-[60px]
            font-bold
            mb-8 md:mb-10
            md:-mt-15
            text-center
            leading-none
          "
        >
          SPLIT PINS
        </h1>

        {/* LINE */}
        <div className="relative -mt-4 md:-mt-8 mb-8 md:mb-10">

          <div className="w-28 md:w-40 h-[3px] bg-white mx-auto rounded-full"></div>

          <div
            className="
              absolute top-0 left-1/2
              -translate-x-1/2
              w-28 md:w-40
              h-[3px]
              bg-white
              blur-md
              opacity-60
            "
          ></div>

        </div>

        {/* CARDS */}
        <div
          className="
            flex flex-col md:flex-row
            justify-center
            gap-8 md:gap-16
            mb-10 md:mb-12
            w-full
            items-center
          "
        >

          {/* CARD 1 */}
          <div
            className="
              bg-white/90
              backdrop-blur-sm
              rounded-3xl
              p-4
              shadow-[0_25px_50px_rgba(0,0,0,0.35)]
              transition duration-500
              hover:-translate-y-4 hover:scale-105

              w-[260px] h-[260px]
              md:w-[320px] md:h-[320px]

              flex items-center justify-center
            "
          >

            <img
              src="/split pins.webp"
              className="
                w-[88%]
                h-[88%]
                object-contain
                rounded-2xl
              "
              alt="Split Pins"
            />

          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-white/90
              backdrop-blur-sm
              rounded-3xl
              p-4
              shadow-[0_25px_50px_rgba(0,0,0,0.35)]
              transition duration-500
              hover:-translate-y-4 hover:scale-105

              w-[260px] h-[260px]
              md:w-[320px] md:h-[320px]

              flex items-center justify-center
            "
          >

            <img
              src="/split-pin.jpg"
              className="
                w-[88%]
                h-[88%]
                object-contain
                rounded-2xl
              "
              alt="Cotter Pins"
            />

          </div>

        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-white
            text-[16px] sm:text-[18px] md:text-[22px]
            leading-relaxed
            mb-10 md:mb-12
            max-w-[95%] md:max-w-[80%]
            text-left md:text-justify
          "
        >
          We supply premium quality{" "}
          <span className="font-bold italic">Cotter / Split Pins</span>{" "}
          suitable for engineering, automotive, fabrication, machinery, and
          industrial fastening applications. Our products are designed for
          reliable locking, vibration resistance, and secure fastening
          performance across multiple industrial uses. We provide split pins in
          various sizes, materials, and finishes as required for different
          customer specifications and project needs.
        </p>

        {/* BUTTON */}
        <Link href="/enquiry">

          <button
            className="
              bg-white text-blue-900
              px-8 md:px-14
              py-3 md:py-4
              text-base md:text-lg
              font-semibold
              rounded-lg
              shadow-md
              hover:shadow-xl hover:scale-105
              transition
              text-center
            "
          >
            SEND US AN ENQUIRY
          </button>

        </Link>

      </div>

      {/* BOTTOM CURVE */}
      <div
        className="
          relative z-10
          h-20 md:h-28
          bg-white
          rounded-t-[30px] md:rounded-t-[40px]
          mt-0
        "
      ></div>

    </main>
  );
}