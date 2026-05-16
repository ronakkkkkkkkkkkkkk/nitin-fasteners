"use client";

import { useEffect, useState } from "react";

export default function LocationPage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1e40af]">

      {/* PARALLAX BACKGROUND */}
      <img
        src="/bolts.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        style={{
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-20">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-white text-[64px] font-bold">
            OUR LOCATION
          </h1>

          {/* 3D LINE */}
          <div className="relative mt-4 flex justify-center">
            <div className="w-44 h-[3px] bg-white rounded-full"></div>

            <div className="absolute w-44 h-[3px] bg-white blur-md opacity-60 rounded-full"></div>
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div
          className="
            max-w-7xl mx-auto
            bg-white/95
            rounded-[30px]
            overflow-hidden
            border border-red-400
            shadow-[0_25px_60px_rgba(0,0,0,0.45)]
            backdrop-blur-sm
          "
        >

          {/* LIVE GOOGLE MAP */}
          <iframe
            src="https://www.google.com/maps?q=SHOP%20NO.8,%20FIRST%20FLOOR,%20NP.20/6,%20SALAM%20COMPLEX,%20M.R.R.LANE,%20S.J.P.%20ROAD%20CROSS,%20BANGALORE%20-%20560002&output=embed"
            width="100%"
            height="720"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* ADDRESS SECTION */}
          <div className="p-10 text-center">

            <h2 className="text-[42px] font-bold text-blue-900 mb-5">
              Visit Nitin Fasteners
            </h2>

            <p className="text-[22px] text-gray-700 leading-relaxed mb-8">
              SHOP NO.8, FIRST FLOOR, NP.20/6, SALAM COMPLEX,
              M.R.R.LANE, S.J.P. ROAD CROSS,
              BANGALORE - 560002.
            </p>

            {/* GOOGLE MAPS BUTTON */}
            <a
              href="https://maps.app.goo.gl/Be8SU7nbogdQEMwp8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-[#1e40af]
                text-white
                text-[20px]
                font-semibold
                px-10 py-5
                rounded-2xl
                shadow-lg
                transition duration-300
                hover:scale-105
                hover:shadow-2xl
              "
            >
              OPEN IN GOOGLE MAPS
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}
