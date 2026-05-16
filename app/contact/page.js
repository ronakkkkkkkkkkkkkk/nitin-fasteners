"use client";

import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

export default function ContactPage() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* FULL PAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* BASE GRADIENT */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: `
              linear-gradient(
                130deg,
                #020617 0%,
                #081b44 28%,
                #111827 52%,
                #3b0a16 78%,
                #450a0a 100%
              )
            `,
            backgroundSize: "400% 400%",
          }}
        />

        {/* BOLTS IMAGE */}
        <img
          src="/bolts.webp"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-[0.09]
            mix-blend-overlay
          "
          style={{
            transform: `translateY(${offset * 0.12}px) scale(1.08)`,
          }}
        />

        {/* BLUE LIGHT */}
        <div
          className="
            absolute
            top-[-15%]
            left-[-10%]
            w-[900px]
            h-[900px]
            rounded-full
            bg-blue-500/20
            blur-[140px]
            animate-floatBlue
          "
        />

        {/* RED LIGHT */}
        <div
          className="
            absolute
            bottom-[-15%]
            right-[-10%]
            w-[900px]
            h-[900px]
            rounded-full
            bg-red-500/20
            blur-[140px]
            animate-floatRed
          "
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 md:px-6 py-14 md:py-20">

        {/* HEADING */}
        <div className="text-center mb-14 md:mb-20">

          <h1 className="text-white text-[46px] md:text-[72px] font-extrabold tracking-wide leading-tight">
            CONTACT US
          </h1>

          <p className="mt-5 text-slate-300 text-[17px] md:text-[24px] italic px-4">
            Reach out for enquiries, quotations & industrial fastener requirements.
          </p>

          {/* DIVIDER */}
          <div className="flex justify-center mt-8">
            <div className="w-[160px] md:w-[220px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
          </div>

        </div>

        {/* CONTACT CARDS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-20">

          {/* MOBILE */}
          <a
            href="tel:+919341214576"
            className="
              group
              bg-black/20
              border border-white/10
              rounded-[28px]
              p-6 md:p-8
              backdrop-blur-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-red-400/50
            "
          >
            <div className="flex items-center gap-4 md:gap-5 mb-5">

              <div
                className="
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-red-500/20
                  flex items-center justify-center
                "
              >
                <FaMobileAlt className="text-red-400 text-2xl md:text-3xl" />
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Mobile
              </h2>

            </div>

            <p className="text-slate-200 text-lg md:text-2xl font-semibold">
              +91 9341214576
            </p>

            <p className="mt-3 text-slate-400 text-sm md:text-base">
              Click to call instantly
            </p>
          </a>

          {/* LANDLINE */}
          <a
            href="tel:08041324035"
            className="
              group
              bg-black/20
              border border-white/10
              rounded-[28px]
              p-6 md:p-8
              backdrop-blur-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-blue-400/50
            "
          >
            <div className="flex items-center gap-4 md:gap-5 mb-5">

              <div
                className="
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-blue-500/20
                  flex items-center justify-center
                "
              >
                <FaPhoneAlt className="text-blue-400 text-xl md:text-2xl" />
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Landline
              </h2>

            </div>

            <p className="text-slate-200 text-lg md:text-2xl font-semibold">
              080-41324035
            </p>

            <p className="mt-3 text-slate-400 text-sm md:text-base">
              Available during business hours
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:nitinfasteners@rediffmail.com"
            className="
              group
              bg-black/20
              border border-white/10
              rounded-[28px]
              p-6 md:p-8
              backdrop-blur-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-red-400/50
            "
          >
            <div className="flex items-center gap-4 md:gap-5 mb-5">

              <div
                className="
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-red-500/20
                  flex items-center justify-center
                "
              >
                <FaEnvelope className="text-red-400 text-xl md:text-2xl" />
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Email
              </h2>

            </div>

            <p className="text-slate-200 text-[15px] md:text-xl font-semibold break-all">
              nitinfasteners@rediffmail.com
            </p>

            <p className="mt-3 text-slate-400 text-sm md:text-base">
              Send us your requirements
            </p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919341214576"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              bg-black/20
              border border-white/10
              rounded-[28px]
              p-6 md:p-8
              backdrop-blur-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-green-400/50
            "
          >
            <div className="flex items-center gap-4 md:gap-5 mb-5">

              <div
                className="
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-green-500/20
                  flex items-center justify-center
                "
              >
                <span className="text-[28px] md:text-[34px]">💬</span>
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold">
                WhatsApp Us
              </h2>

            </div>

            <p className="text-slate-200 text-lg md:text-2xl font-semibold">
              +91 9341214576
            </p>

            <p className="mt-3 text-slate-400 text-sm md:text-base">
              Fastest way to contact us
            </p>
          </a>

          {/* WEBSITE */}
          <a
            href="https://nitinfasteners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              bg-black/20
              border border-white/10
              rounded-[28px]
              p-6 md:p-8
              backdrop-blur-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-blue-400/50
            "
          >
            <div className="flex items-center gap-4 md:gap-5 mb-5">

              <div
                className="
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-blue-500/20
                  flex items-center justify-center
                "
              >
                <FaGlobe className="text-blue-400 text-xl md:text-2xl" />
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Website
              </h2>

            </div>

            <p className="text-slate-200 text-[15px] md:text-xl font-semibold break-all">
              www.nitinfasteners.com
            </p>
          </a>

          {/* ADDRESS */}
          <div
            className="
              bg-black/20
              border border-white/10
              rounded-[28px]
              p-6 md:p-8
              backdrop-blur-md
            "
          >
            <div className="flex items-center gap-4 md:gap-5 mb-5">

              <div
                className="
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-red-500/20
                  flex items-center justify-center
                "
              >
                <FaMapMarkerAlt className="text-red-400 text-xl md:text-2xl" />
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Address
              </h2>

            </div>

            <p className="text-slate-200 text-[15px] md:text-[18px] leading-relaxed">
              SHOP NO.8, FIRST FLOOR, NO.20/6, SALAM COMPLEX,
              M.R.R.LANE, S.J.P. ROAD CROSS,
              BANGALORE - 560002.
            </p>
          </div>

        </div>

        {/* LOCATION HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-white text-[38px] md:text-[58px] font-bold">
            OUR LOCATION
          </h2>

          <div className="flex justify-center mt-5">
            <div className="w-[140px] md:w-[180px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
          </div>

        </div>

        {/* MAP SECTION */}
        <div
          className="
            max-w-7xl mx-auto
            bg-black/20
            border border-white/10
            rounded-[35px]
            overflow-hidden
            backdrop-blur-md
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >

          <iframe
            src="https://www.google.com/maps?q=SHOP%20NO.8,%20FIRST%20FLOOR,%20NP.20/6,%20SALAM%20COMPLEX,%20M.R.R.LANE,%20S.J.P.%20ROAD%20CROSS,%20BANGALORE%20-%20560002&output=embed"
            width="100%"
            height={isMobile ? "350" : "720"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="p-6 md:p-12 text-center">

            <h3 className="text-white text-[28px] md:text-[42px] font-bold mb-5">
              Visit Nitin Fasteners
            </h3>

            <p className="text-slate-300 text-[16px] md:text-[22px] leading-relaxed mb-8 md:mb-10">
              Trusted industrial fastener suppliers serving customers
              across multiple industries with quality & reliability.
            </p>

            <a
              href="https://maps.app.goo.gl/Be8SU7nbogdQEMwp8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-red-600
                hover:bg-red-700
                text-white
                text-[15px] md:text-[20px]
                font-bold
                px-6 md:px-10
                py-4 md:py-5
                rounded-2xl
                transition-all duration-300
                hover:scale-105
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
