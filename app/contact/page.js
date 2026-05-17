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

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

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

        <img
          src="/bolts.webp"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-[0.08]
            mix-blend-overlay
          "
          style={{
            transform: `translateY(${offset * 0.1}px) scale(1.03)`,
          }}
        />

        <div
          className="
            absolute
            top-[-15%]
            left-[-10%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-blue-500/20
            blur-[120px]
            animate-floatBlue
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            right-[-10%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-red-500/20
            blur-[120px]
            animate-floatRed
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10

          px-3 md:px-5 xl:px-8

          pt-10 md:pt-12
          pb-14 md:pb-16
        "
      >

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-12">

          <h1
            className="
              text-white
              text-[38px]
              md:text-[58px]
              xl:text-[66px]
              font-extrabold
              tracking-wide
              leading-tight
            "
          >
            CONTACT US
          </h1>

          <p
            className="
              mt-4
              text-slate-300
              text-[15px]
              md:text-[19px]
              xl:text-[21px]
              italic
              px-4
            "
          >
            Reach out for enquiries, quotations & industrial fastener requirements.
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-[130px] xl:w-[180px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
          </div>

        </div>

        {/* CONTACT CARDS */}
        <div
          className="
            max-w-[1450px]
            mx-auto

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-5 xl:gap-6

            mb-14
          "
        >

          {/* MOBILE */}
          <a
            href="tel:+919341214576"
            className="
              group
              bg-black/20
              border border-white/10

              rounded-[26px]

              p-5 xl:p-6

              backdrop-blur-md

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-red-400/50
            "
          >
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-red-500/20
                  flex items-center justify-center
                "
              >
                <FaMobileAlt className="text-red-400 text-2xl" />
              </div>

              <h2
                className="
                  text-white
                  text-[26px]
                  xl:text-[32px]
                  font-bold
                "
              >
                Mobile
              </h2>

            </div>

            <p
              className="
                text-slate-200
                text-[22px]
                xl:text-[26px]
                font-semibold
              "
            >
              +91 9341214576
            </p>

            <p className="mt-3 text-slate-400 text-[15px]">
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

              rounded-[26px]

              p-5 xl:p-6

              backdrop-blur-md

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-blue-400/50
            "
          >
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-blue-500/20
                  flex items-center justify-center
                "
              >
                <FaPhoneAlt className="text-blue-400 text-xl" />
              </div>

              <h2
                className="
                  text-white
                  text-[26px]
                  xl:text-[32px]
                  font-bold
                "
              >
                Landline
              </h2>

            </div>

            <p
              className="
                text-slate-200
                text-[22px]
                xl:text-[26px]
                font-semibold
              "
            >
              080-41324035
            </p>

            <p className="mt-3 text-slate-400 text-[15px]">
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

              rounded-[26px]

              p-5 xl:p-6

              backdrop-blur-md

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-red-400/50
            "
          >
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-red-500/20
                  flex items-center justify-center
                "
              >
                <FaEnvelope className="text-red-400 text-xl" />
              </div>

              <h2
                className="
                  text-white
                  text-[26px]
                  xl:text-[32px]
                  font-bold
                "
              >
                Email
              </h2>

            </div>

            <p
              className="
                text-slate-200
                text-[15px]
                xl:text-[18px]
                font-semibold
                break-all
              "
            >
              nitinfasteners@rediffmail.com
            </p>

            <p className="mt-3 text-slate-400 text-[15px]">
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

              rounded-[26px]

              p-5 xl:p-6

              backdrop-blur-md

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-green-400/50
            "
          >
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-green-500/20
                  flex items-center justify-center
                "
              >
                <span className="text-[28px]">💬</span>
              </div>

              <h2
                className="
                  text-white
                  text-[26px]
                  xl:text-[32px]
                  font-bold
                "
              >
                WhatsApp Us
              </h2>

            </div>

            <p
              className="
                text-slate-200
                text-[22px]
                xl:text-[26px]
                font-semibold
              "
            >
              +91 9341214576
            </p>

            <p className="mt-3 text-slate-400 text-[15px]">
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

              rounded-[26px]

              p-5 xl:p-6

              backdrop-blur-md

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-blue-400/50
            "
          >
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-blue-500/20
                  flex items-center justify-center
                "
              >
                <FaGlobe className="text-blue-400 text-xl" />
              </div>

              <h2
                className="
                  text-white
                  text-[26px]
                  xl:text-[32px]
                  font-bold
                "
              >
                Website
              </h2>

            </div>

            <p
              className="
                text-slate-200
                text-[15px]
                xl:text-[18px]
                font-semibold
                break-all
              "
            >
              www.nitinfasteners.com
            </p>
          </a>

          {/* ADDRESS */}
          <div
            className="
              bg-black/20
              border border-white/10

              rounded-[26px]

              p-5 xl:p-6

              backdrop-blur-md
            "
          >
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-red-500/20
                  flex items-center justify-center
                "
              >
                <FaMapMarkerAlt className="text-red-400 text-xl" />
              </div>

              <h2
                className="
                  text-white
                  text-[26px]
                  xl:text-[32px]
                  font-bold
                "
              >
                Address
              </h2>

            </div>

            <p
              className="
                text-slate-200
                text-[15px]
                xl:text-[17px]
                leading-relaxed
              "
            >
              SHOP NO.8, FIRST FLOOR, NO.20/6,
              SALAM COMPLEX, M.R.R.LANE,
              S.J.P. ROAD CROSS,
              BANGALORE - 560002.
            </p>
          </div>

        </div>

        {/* LOCATION */}
        <div className="text-center mb-8">

          <h2
            className="
              text-white
              text-[34px]
              md:text-[46px]
              xl:text-[54px]
              font-bold
            "
          >
            OUR LOCATION
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-[120px] xl:w-[170px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
          </div>

        </div>

        {/* MAP */}
        <div
          className="
            max-w-[1500px]
            mx-auto

            bg-black/20
            border border-white/10

            rounded-[30px]

            overflow-hidden
            backdrop-blur-md

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.109088605558!2d77.57664117383511!3d12.96487078734985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e2792f5f47%3A0x626de5e92fb24e35!2sNitin%20Fasteners!5e0!3m2!1sen!2sin!4v1778945411284!5m2!1sen!2sin"
            width="100%"
            height={isMobile ? "350" : "540"}
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="p-5 md:p-8 text-center">

            <h3
              className="
                text-white
                text-[24px]
                md:text-[34px]
                xl:text-[38px]
                font-bold
                mb-4
              "
            >
              Visit Nitin Fasteners
            </h3>

            <p
              className="
                text-slate-300
                text-[15px]
                md:text-[18px]
                xl:text-[20px]
                leading-relaxed
                mb-7
              "
            >
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
                text-[14px]
                md:text-[17px]

                font-bold

                px-6 md:px-8
                py-3 md:py-4

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
