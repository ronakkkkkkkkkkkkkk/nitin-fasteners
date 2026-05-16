"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-[9999]">
      <div
        className="
          max-w-[1800px]
          mx-auto
          px-3 sm:px-4 md:px-10
          py-4 md:py-3
          flex
          items-center
          justify-between
          relative
        "
      >
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.png"
            alt="Nitin Fasteners"
            className="
              w-[60px]
              sm:w-[70px]
              md:w-[170px]
              h-auto
              object-contain
            "
          />

          <div>
            <h1
              className="
                text-[18px]
                sm:text-[20px]
                md:text-[43px]
                font-extrabold
                leading-none
                whitespace-nowrap
              "
            >
              <span className="text-blue-900">Nitin</span>{" "}
              <span className="text-red-600">Fasteners</span>
            </h1>

            <p
              className="
                text-gray-500
                text-[7px]
                sm:text-[8px]
                md:text-sm
                font-semibold
                tracking-wide
                mt-[2px]
              "
            >
              ESTD. 1991
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
            text-[35px]
            font-bold
            text-black
            shrink-0
          "
        >
          <a
            href="/"
            className="hover:text-red-600 transition whitespace-nowrap"
          >
            Home
          </a>

          {/* DESKTOP PRODUCTS */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className="
                hover:text-red-600
                transition
                flex
                items-center
                gap-2
                whitespace-nowrap
                cursor-pointer
              "
            >
              Products
              <span className="text-sm">
                {productsOpen ? "▲" : "▼"}
              </span>
            </button>

            {productsOpen && (
              <div
                className="
                  absolute
                  top-full
                  left-0
                  mt-3
                  w-72
                  bg-white
                  rounded-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  border
                  border-gray-200
                  overflow-hidden
                  z-[99999]
                "
              >
                {[
                  ["Bolts", "/products/bolts"],
                  ["Nuts", "/products/nuts"],
                  ["Screws", "/products/screws"],
                  ["Washers", "/products/washers"],
                  ["Split Pins", "/products/split-pins"],
                  ["Rivets", "/products/rivets"],
                  ["Special Fasteners", "/products/special-fasteners"],
                ].map(([name, link]) => (
                  <a
                    key={link}
                    href={link}
                    className="
                      block
                      px-6
                      py-4
                      text-lg
                      hover:bg-gray-100
                      transition
                    "
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/enquiry"
            className="hover:text-red-600 transition whitespace-nowrap"
          >
            Enquiry
          </a>

          <a
            href="/contact"
            className="hover:text-red-600 transition whitespace-nowrap"
          >
            Contact Us
          </a>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="mobile-hamburger"
  style={{
    flexDirection: "column",
    gap: "5px",
    padding: "10px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 99999,
  }}
>
  <div style={{ width: "28px", height: "3px", background: "black", borderRadius: "4px" }}></div>
  <div style={{ width: "28px", height: "3px", background: "black", borderRadius: "4px" }}></div>
  <div style={{ width: "28px", height: "3px", background: "black", borderRadius: "4px" }}></div>
</button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
              lg:hidden
              absolute
              top-full
              left-0
              w-full
              bg-white
              shadow-2xl
              border-t
              z-[99998]
            "
          >
            <div className="flex flex-col p-4 text-lg font-bold">
              <a
                href="/"
                className="py-3 border-b"
              >
                Home
              </a>

              {/* MOBILE PRODUCTS */}
              <details className="py-3 border-b">
                <summary className="cursor-pointer">
                  Products
                </summary>

                <div className="flex flex-col mt-3 ml-3 text-base font-medium">
                  <a href="/products/bolts" className="py-2">
                    Bolts
                  </a>

                  <a href="/products/nuts" className="py-2">
                    Nuts
                  </a>

                  <a href="/products/screws" className="py-2">
                    Screws
                  </a>

                  <a href="/products/washers" className="py-2">
                    Washers
                  </a>

                  <a href="/products/split-pins" className="py-2">
                    Split Pins
                  </a>

                  <a href="/products/rivets" className="py-2">
                    Rivets
                  </a>

                  <a
                    href="/products/special-fasteners"
                    className="py-2"
                  >
                    Special Fasteners
                  </a>
                </div>
              </details>

              <a
                href="/enquiry"
                className="py-3 border-b"
              >
                Enquiry
              </a>

              <a
                href="/contact"
                className="py-3"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}