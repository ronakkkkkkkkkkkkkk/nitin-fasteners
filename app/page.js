"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen">


      {/* ================= FULL PAGE BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div
          className="absolute inset-0 animate-gradient"
          style={{
            backgroundImage: `
              linear-gradient(
                130deg,
                #020617 0%,
                #081b44 28%,
                #111827 52%,
                #3b0a16 78%,
                #450a0a 100%
              )
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "400% 400%",
          }}
        />

        {/* BACKGROUND IMAGE */}
        <img
          src="/bolts.webp"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-[0.07]
            mix-blend-overlay
          "
        />

        {/* BLUE LIGHT */}
        <div
          className="
            absolute
            top-[-15%]
            left-[-10%]
            w-[700px] md:w-[900px]
            h-[700px] md:h-[900px]
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
            w-[700px] md:w-[900px]
            h-[700px] md:h-[900px]
            rounded-full
            bg-red-500/20
            blur-[140px]
            animate-floatRed
          "
        />

      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10">

        {/* ================= HERO ================= */} 
        <section className="hero-section flex items-center justify-center px-4 sm:px-6 py-4 md:py-20 md:min-h-screen">
        <div
  className="
    w-full
    max-w-7xl
    rounded-[24px] md:rounded-[40px]
    border border-white/10
    bg-black/25
    backdrop-blur-md
    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
    px-5 sm:px-8 md:px-12
    py-8 sm:py-12 md:py-24
    text-center
    relative
    overflow-hidden
  "
>

            {/* BLUE GLOW */}
            <div
              className="
                absolute
                top-[-30%]
                left-[-10%]
                w-[300px] md:w-[500px]
                h-[300px] md:h-[500px]
                rounded-full
                bg-blue-500/10
                blur-[120px]
              "
            />

            {/* RED GLOW */}
            <div
              className="
                absolute
                bottom-[-30%]
                right-[-10%]
                w-[300px] md:w-[500px]
                h-[300px] md:h-[500px]
                rounded-full
                bg-red-500/10
                blur-[120px]
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">

              <img
                src="/logo.png"
                alt="Nitin Fasteners"
                className="
                  w-[220px]
                  sm:w-[340px]
                  md:w-[540px]
                  mx-auto
                  mb-8 md:mb-10
                  object-contain
                "
              />

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                <span className="text-blue-400">Nitin</span>{" "}
                <span className="text-red-500">Fasteners</span>
              </h1>

              <p className="mt-6 text-lg sm:text-2xl md:text-4xl italic text-slate-200 font-medium leading-relaxed">
                Dealers in nuts, bolts, washers, screws & industrial fasteners.
              </p>

            </div>
          </div>
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="flex justify-center py-12 md:py-12">
          <div className="relative w-[95%] h-[3px] rounded-full overflow-hidden">

            <div className="absolute inset-0 bg-white/30 rounded-full"></div>

            <div
              className="
                absolute top-0 left-[-30%]
                w-[30%] h-full
                bg-white/80 blur-md opacity-70
                animate-[slide_3s_linear_infinite]
              "
            ></div>

          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <section
  id="about"
  className="py-2 md:py-20 flex flex-col justify-center items-center text-center px-4 sm:px-6"
>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide text-center">
            About
          </h2>

          {/* UNDERLINE */}
          <div className="mt-6 w-[180px] md:w-[320px] h-[3px] relative overflow-hidden rounded-full mb-8 md:mb-10">

            <div className="absolute inset-0 bg-white/25"></div>

            <div
              className="
                absolute top-0 left-[-30%]
                w-[30%] h-full
                bg-white/80 blur-md opacity-70
                animate-[slide_3s_linear_infinite]
              "
            ></div>

          </div>

          <p
            className="
              text-lg sm:text-xl md:text-3xl
              text-white
              max-w-6xl
              leading-relaxed
              text-left md:text-justify
            "
          >
            Nitin Fasteners is a trusted wholesale supplier and dealer in the
            fasteners industry with over 35 years of experience. We specialize
            in high-quality nuts, bolts, washers, screws, and industrial
            fasteners tailored to customer requirements and specifications. Our
            focus on competitive pricing, consistent quality, and reliable
            supply ensures long-term customer satisfaction across industries.
          </p>

        </section>

        {/* ================= DIVIDER ================= */}
        <div className="flex justify-center py-10 md:py-12">
          <div className="relative w-[95%] h-[3px] rounded-full overflow-hidden">

            <div className="absolute inset-0 bg-white/30 rounded-full"></div>

            <div
              className="
                absolute top-0 left-[-30%]
                w-[30%] h-full
                bg-white/80 blur-md opacity-70
                animate-[slide_3s_linear_infinite]
              "
            ></div>

          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <section className="pt-4 pb-20 px-4 sm:px-6">

          {/* TITLE */}
          <div className="flex flex-col items-center py-10 md:py-15">

            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide text-center">
              Products Offered
            </h2>

            {/* UNDERLINE */}
            <div className="mt-6 w-[180px] md:w-[320px] h-[3px] relative overflow-hidden rounded-full">

              <div className="absolute inset-0 bg-white/25"></div>

              <div
                className="
                  absolute top-0 left-[-30%]
                  w-[30%] h-full
                  bg-white/80 blur-md opacity-70
                  animate-[slide_3s_linear_infinite]
                "
              ></div>

            </div>
          </div>

          {/* GRID */}
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-7 md:gap-14">

{[
  {
    title: "Bolts",
    img: "/bolts.webp",
    desc: "High-strength industrial bolts for construction, heavy machinery, and structural fastening applications.",
  },
  {
    title: "Nuts",
    img: "/nuts.webp",
    desc: "Precision-engineered nuts ensuring strong, vibration-resistant fastening across mechanical systems.",
  },
  {
    title: "Washers",
    img: "/washers.webp",
    desc: "Durable washers for load distribution, vibration control, and surface protection.",
  },
  {
    title: "Screws",
    img: "/screws.webp",
    desc: "Versatile screws including wood, machine, and self-tapping types for multi-material fastening.",
  },
  {
    title: "Split Pins",
    img: "/split pins.webp",
    desc: "Reliable cotter pins designed to lock components securely and prevent loosening.",
  },
  {
    title: "Rivets",
    img: "/rivets.webp",
    desc: "Permanent fastening solutions for strong and durable metal joining applications.",
  },
  {
    title: "Special Fasteners",
    img: "/special.webp",
    desc: "Custom-engineered fasteners designed for specialized industrial applications. Available strictly on enquiry for tailored requirements.",
    special: true,
  },
].map((item, i) => (

  <div
    key={i}
    className={`
      flex justify-center w-full
      ${item.special ? "xl:col-span-3" : ""}
    `}
  >

    <div
      className="
        group
        bg-white
        rounded-2xl

        w-full

        max-w-[290px]
        sm:max-w-[340px]
        md:max-w-[400px]

        min-h-[180px]
        sm:min-h-[350px]
        md:min-h-[390px]

        shadow-[0_25px_60px_rgba(0,0,0,0.5)]
        hover:shadow-[0_35px_80px_rgba(0,0,0,0.7)]

        hover:-translate-y-3

        transition-all
        duration-300

        overflow-hidden

        flex-1
        flex-col
      "
    >

      {/* IMAGE AREA */}
      <div
        className="
          h-[90px]
          sm:h-[170px]
          md:h-[220px]

          flex
          items-center
          justify-center

          bg-white

          p-4
          sm:p-5
          md:p-6

          overflow-hidden
        "
      >

        <img
          src={item.img}
          alt={item.title}
          className="
            max-w-full
            max-h-full
            object-contain

            drop-shadow-[10px_18px_24px_rgba(0,0,0,0.45)]

            transition-transform
            duration-300

            group-hover:scale-110
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          flex
          flex-col

          px-4
          sm:px-5
          md:px-6

          py-1
          sm:py-3
        "
      >

        <h3
          className="
            text-lg
            sm:text-2xl
            md:text-3xl

            font-extrabold
            text-black
            text-center

            mb-1 md:mb-4
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-gray-800

            text-[10px]
            sm:text-[14px]
            md:text-base

            leading-snug

            text-justify

            break-words
          "
        >
          {item.desc}
        </p>

      </div>

    </div>

  </div>

))}
</div>
        </section>
      </div>
    </main>
  );
}
