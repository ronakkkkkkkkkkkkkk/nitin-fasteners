"use client";

import { useEffect, useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

export default function EnquiryPage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="
        relative min-h-screen
        bg-[#1e40af]
        overflow-hidden
        px-4 md:px-5
        py-8 md:py-16
      "
    >

      {/* PARALLAX BACKGROUND */}
      <img
        src="/bolts.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          bg-white
          rounded-[28px] md:rounded-[45px]
          overflow-hidden
          border border-red-500
          shadow-[0_0_35px_rgba(255,0,0,0.18)]
          grid grid-cols-1 lg:grid-cols-2
        "
      >

        {/* LEFT SIDE */}
        <div className="p-6 sm:p-8 md:p-12 bg-[#f8f8f8]">

          {/* TITLE */}
          <h1
            className="
              text-[34px] sm:text-[44px] md:text-[56px]
              font-bold text-blue-900
              mb-8 md:mb-12
            "
          >
            Enquiry Details
          </h1>

          {/* CONTACT PERSON */}
          <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">

            <div
              className="
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                bg-blue-900 text-white
                flex items-center justify-center
                text-lg md:text-2xl
                shrink-0
              "
            >
              <FaUser />
            </div>

            <div>
              <h2
                className="
                  text-[22px] md:text-[28px]
                  font-bold text-slate-900
                "
              >
                Contact Person
              </h2>

              <p
                className="
                  text-[16px] md:text-[20px]
                  text-slate-700
                  mt-1
                "
              >
                Nitin Sheth
              </p>
            </div>

          </div>

          <hr className="mb-8 md:mb-10 border-slate-300" />

          {/* ADDRESS */}
          <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">

            <div
              className="
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                bg-blue-900 text-white
                flex items-center justify-center
                text-lg md:text-2xl
                shrink-0
              "
            >
              <FaMapMarkerAlt />
            </div>

            <div>
              <h2
                className="
                  text-[22px] md:text-[28px]
                  font-bold text-slate-900
                "
              >
                Address
              </h2>

              <p
                className="
                  text-[15px] md:text-[18px]
                  leading-relaxed
                  text-slate-700
                  mt-2
                "
              >
                SHOP NO.8, FIRST FLOOR, NO.20/6, SALAM COMPLEX,
                M.R.R.LANE, S.J.P. ROAD CROSS, BANGALORE - 560002.
              </p>
            </div>

          </div>

          <hr className="mb-8 md:mb-10 border-slate-300" />

          {/* LANDLINE */}
          <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">

            <div
              className="
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                bg-blue-900 text-white
                flex items-center justify-center
                text-lg md:text-2xl
                shrink-0
              "
            >
              <FaPhoneAlt />
            </div>

            <div>
              <h2
                className="
                  text-[22px] md:text-[28px]
                  font-bold text-slate-900
                "
              >
                Landline
              </h2>

              <a
                href="tel:08041324035"
                className="
                  text-[16px] md:text-[20px]
                  text-slate-700
                  mt-1 block
                  hover:text-blue-700
                  transition
                "
              >
                080-41324035
              </a>
            </div>

          </div>

          <hr className="mb-8 md:mb-10 border-slate-300" />

          {/* MOBILE */}
          <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">

            <div
              className="
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                bg-blue-900 text-white
                flex items-center justify-center
                text-lg md:text-2xl
                shrink-0
              "
            >
              <FaMobileAlt />
            </div>

            <div>
              <h2
                className="
                  text-[22px] md:text-[28px]
                  font-bold text-slate-900
                "
              >
                Phone Number
              </h2>

              <a
                href="tel:+919341214576"
                className="
                  text-blue-700 font-bold
                  text-[16px] md:text-[20px]
                  hover:underline
                  cursor-pointer
                  transition
                "
                title="Click to call"
              >
                +91 9341214576
              </a>
            </div>

          </div>

          <hr className="mb-8 md:mb-10 border-slate-300" />

          {/* GST */}
          <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">

            <div
              className="
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                bg-blue-900 text-white
                flex items-center justify-center
                text-[16px] md:text-[22px]
                font-bold
                shrink-0
              "
            >
              GST
            </div>

            <div>
              <h2
                className="
                  text-[22px] md:text-[28px]
                  font-bold text-slate-900
                "
              >
                GSTIN
              </h2>

              <p
                className="
                  text-[16px] md:text-[20px]
                  text-slate-700
                  mt-1
                "
              >
                29ABVPS3659M1ZE
              </p>
            </div>

          </div>

          <hr className="mb-8 md:mb-10 border-slate-300" />

          {/* WEBSITE */}
          <div className="flex gap-4 md:gap-6">

            <div
              className="
                w-12 h-12 md:w-16 md:h-16
                rounded-full
                bg-blue-900 text-white
                flex items-center justify-center
                text-lg md:text-2xl
                shrink-0
              "
            >
              <FaGlobe />
            </div>

            <div>
              <h2
                className="
                  text-[22px] md:text-[28px]
                  font-bold text-slate-900
                "
              >
                Web Address
              </h2>

              <a
                href="https://www.nitinfasteners.com"
                target="_blank"
                className="
                  text-[16px] md:text-[20px]
                  text-blue-700
                  hover:underline
                  break-all
                "
              >
                www.nitinfasteners.com
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 md:p-12 bg-white">

          {/* TITLE */}
          <h1
            className="
              text-[32px] sm:text-[42px] md:text-[54px]
              font-bold text-blue-900
              mb-8 md:mb-12
            "
          >
            Send Us An Enquiry
          </h1>

          {/* FORM */}
          <form
            action="https://formsubmit.co/nitinfasteners@rediffmail.com"
            method="POST"
            className="space-y-6 md:space-y-8"
          >

            {/* HIDDEN */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000" />

            {/* COMPANY */}
            <div>

              <label
                className="
                  block
                  text-[18px] md:text-[22px]
                  font-bold
                  mb-3 md:mb-4
                  text-slate-900
                "
              >
                Company Details *
              </label>

              <input
                type="text"
                name="Company"
                required
                placeholder="Enter your Company Name"
                className="
                  w-full
                  border border-slate-300
                  rounded-[14px] md:rounded-[18px]
                  px-4 md:px-6
                  py-4 md:py-5
                  text-[16px] md:text-[20px]
                  outline-none
                  focus:border-blue-700
                  transition
                "
              />

            </div>

            {/* NAME */}
            <div>

              <label
                className="
                  block
                  text-[18px] md:text-[22px]
                  font-bold
                  mb-3 md:mb-4
                  text-slate-900
                "
              >
                Your Name *
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                className="
                  w-full
                  border border-slate-300
                  rounded-[14px] md:rounded-[18px]
                  px-4 md:px-6
                  py-4 md:py-5
                  text-[16px] md:text-[20px]
                  outline-none
                  focus:border-blue-700
                  transition
                "
              />

            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  block
                  text-[18px] md:text-[22px]
                  font-bold
                  mb-3 md:mb-4
                  text-slate-900
                "
              >
                Email *
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter Email"
                className="
                  w-full
                  border border-slate-300
                  rounded-[14px] md:rounded-[18px]
                  px-4 md:px-6
                  py-4 md:py-5
                  text-[16px] md:text-[20px]
                  outline-none
                  focus:border-blue-700
                  transition
                "
              />

            </div>

            {/* MOBILE */}
            <div>

              <label
                className="
                  block
                  text-[18px] md:text-[22px]
                  font-bold
                  mb-3 md:mb-4
                  text-slate-900
                "
              >
                Mobile *
              </label>

              <input
                type="tel"
                name="mobile"
                required
                placeholder="Enter Mobile Number"
                className="
                  w-full
                  border border-slate-300
                  rounded-[14px] md:rounded-[18px]
                  px-4 md:px-6
                  py-4 md:py-5
                  text-[16px] md:text-[20px]
                  outline-none
                  focus:border-blue-700
                  transition
                "
              />

            </div>

            {/* ENQUIRY */}
            <div>

              <label
                className="
                  block
                  text-[18px] md:text-[22px]
                  font-bold
                  mb-3 md:mb-4
                  text-slate-900
                "
              >
                Enquiry Details *
              </label>

              <textarea
                name="details"
                required
                rows={6}
                placeholder="Enter Your Requirement of the product"
                className="
                  w-full
                  border border-slate-300
                  rounded-[14px] md:rounded-[18px]
                  px-4 md:px-6
                  py-4 md:py-5
                  text-[16px] md:text-[20px]
                  outline-none
                  resize-none
                  focus:border-blue-700
                  transition
                "
              ></textarea>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2">

              <button
                type="submit"
                className="
                  bg-blue-900 text-white
                  px-8 md:px-10
                  py-3 md:py-4
                  rounded-[12px] md:rounded-[14px]
                  text-[16px] md:text-[20px]
                  font-semibold
                  hover:bg-red-600
                  transition duration-300
                  shadow-lg
                "
              >
                Submit
              </button>

              <button
                type="reset"
                className="
                  bg-slate-300 text-slate-900
                  px-8 md:px-10
                  py-3 md:py-4
                  rounded-[12px] md:rounded-[14px]
                  text-[16px] md:text-[20px]
                  font-semibold
                  hover:bg-slate-400
                  transition duration-300
                "
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>
    </main>
  );
}
