"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpecialFastenersPage() {
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
      <div
        className="
          absolute inset-0 opacity-10
          bg-cover bg-center bg-no-repeat
          md:bg-cover
          bg-[length:220%]
          sm:bg-[length:170%]
        "
        style={{
          backgroundImage: "url('/anchor-bolts.webp')",
          transform: `translateY(${offset * 0.2}px)`,
          minHeight: "100%",
        }}
      ></div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex flex-col
          items-center
          justify-start md:justify-center
          min-h-[100svh]
          px-4 md:px-2

          pt-4
          md:pt-10
          lg:pt-8

          pb-2
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-white
            text-[34px]
            sm:text-[46px]
            md:text-[52px]
            lg:text-[58px]

            font-bold

            mb-8 md:mb-10

            text-center
          "
        >
          SPECIAL FASTENERS
        </h1>

        {/* LINE */}
        <div className="relative -mt-4 md:-mt-10 mb-8 md:mb-10">

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

              w-[240px]
              h-[240px]

              md:w-[250px]
              md:h-[250px]

              lg:w-[270px]
              lg:h-[270px]

              flex items-center justify-center
            "
          >

            <img
              src="/special1.jpeg"
              className="
                w-[88%]
                h-[88%]
                object-contain
                rounded-2xl
                scale-y-125
              "
              alt="Special Fasteners"
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

              w-[240px]
              h-[240px]

              md:w-[250px]
              md:h-[250px]

              lg:w-[270px]
              lg:h-[270px]

              flex items-center justify-center
            "
          >

            <img
              src="/self-clinching.jpg"
              className="
                w-[88%]
                h-[88%]
                object-contain
                rounded-2xl
                scale-y-125
              "
              alt="Self Clinching Fasteners"
            />

          </div>

        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-white

            text-[16px]
            sm:text-[18px]
            md:text-[21px]

            leading-relaxed

            mb-10 md:mb-12

            max-w-[95%]
            md:max-w-[80%]

            text-left
            md:text-justify
          "
        >
          We supply premium quality special fasteners designed for
          industrial, engineering, fabrication, construction, and heavy-duty
          applications. Our range includes custom fastening solutions suitable
          for unique operational and technical requirements across various
          industries. We provide special fasteners in different sizes,
          materials, grades, coatings, and finishes exactly as per customer
          requirements and project specifications.
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

              hover:shadow-xl
              hover:scale-105

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
