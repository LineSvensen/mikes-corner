import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#FAC800] min-[800px]:flex min-[800px]:h-[calc(100svh-66px)] min-[800px]:min-h-[680px]">
      {/* Background */}
      <img
        src="/images/Herobanner/mikes-yellow.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Food image, mobile: along the bottom, under the info bar */}
      <img
        src="/images/Herobanner/mob-food-image.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[240px] w-full object-cover object-top min-[800px]:hidden"
      />

      {/* Food image, desktop: right side, over the info bar */}
      <img
        src="/images/Herobanner/food-image.webp"
        alt=""
        className="pointer-events-none absolute right-0 top-1/2 z-20 hidden h-[125%] w-[75%] -translate-y-1/2 object-cover object-left min-[800px]:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pb-[300px] pt-6 text-center min-[800px]:w-[55%] min-[800px]:justify-center min-[800px]:gap-8 min-[800px]:px-10 min-[800px]:pb-24 min-[800px]:pt-8">
        <img
          src="/images/Herobanner/mikes-corner-logo.webp"
          alt="Mike's Corner"
          className="h-14 self-start min-[800px]:h-16 min-[800px]:self-center"
        />

        <h1 className="flex items-center gap-3 text-2xl font-bold uppercase leading-tight text-black [text-shadow:2px_2px_0_#fff] sm:text-4xl min-[800px]:text-5xl">
          <svg
            viewBox="0 0 40 40"
            className="h-6 w-6 shrink-0 min-[800px]:h-10 min-[800px]:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 22 L16 26 M8 10 L18 18 M22 4 L24 16" />
          </svg>
          Food, drinks &amp; good vibes
        </h1>

        <Link
          href="/menu"
          className="rounded-2xl bg-[#E8191C] px-8 py-3 text-lg font-bold uppercase text-white transition hover:bg-red-700 min-[800px]:px-9 min-[800px]:text-xl"
        >
          See menu
        </Link>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://ig.me/m/mikescorner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-2 text-sm font-bold uppercase text-black transition hover:bg-black hover:text-[#FAC800] min-[800px]:text-base"
          >
            <FaInstagram
              className="h-5 w-5 min-[800px]:h-6 min-[800px]:w-6"
              aria-hidden="true"
            />
            Book party, event or catering
          </a>

          <a
            href="https://instagram.com/mikescorner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase text-black underline min-[800px]:text-sm"
          >
            Check out our upcoming events! @mikescorner
          </a>
        </div>
      </div>

      {/* Info bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-[#FDEFC8]">
        <div className="flex items-center justify-between gap-4 px-5 py-3 text-sm font-medium uppercase text-black min-[800px]:w-[55%] min-[800px]:justify-center min-[800px]:gap-12 min-[800px]:py-4 min-[800px]:text-base">
          <div className="flex items-center gap-3">
            <FiMapPin className="h-6 w-6 shrink-0" aria-hidden="true" />
            <p>
              Operagata 77 D
              <br />
              0194 Oslo
            </p>
          </div>

          <p>
            Man-Fri: 11-19
            <br />
            Sat-Sun: 12-19
          </p>
        </div>
      </div>
    </section>
  );
}

// -------HEROBANNER MED SLIDES -- --
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     id: 1,
//     image: "/images/Herobanner/mikes-yellow.webp",
//     foregroundImage: "/images/Herobanner/food-image.webp",
//     eyebrow: "New collection",
//     title: "Simple things, made well.",
//     text: "Discover our latest products.",
//     href: "/products",
//     buttonText: "Shop now",
//   },

//   {
//     id: 2,
//     image: "/images/Herobanner/room2.jpg",
//     foregroundImage: "/images/Herobanner/shirt.jpg",
//     eyebrow: "Featured",
//     title: "Designed for everyday use.",
//     text: "Timeless products for your home.",
//     href: "/products",
//     buttonText: "Explore collection",
//   },

//   {
//     id: 3,
//     image: "/images/Herobanner/blobs.jpg",
//     foregroundImage: "/images/Herobanner/nuts.jpg",
//     eyebrow: "Our favourites",
//     title: "Find your new favourite.",
//     text: "A curated selection of products we love.",
//     href: "/products",
//     buttonText: "View products",
//   },
// ];

// export default function HeroBanner() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const touchStartX = useRef(null);

//   function nextSlide() {
//     setCurrentSlide((current) =>
//       current === slides.length - 1 ? 0 : current + 1,
//     );
//   }

//   function previousSlide() {
//     setCurrentSlide((current) =>
//       current === 0 ? slides.length - 1 : current - 1,
//     );
//   }

//   function goToSlide(index) {
//     setCurrentSlide(index);
//     setAutoPlay(false);
//   }

//   useEffect(() => {
//     if (!autoPlay) return;

//     const interval = setInterval(() => {
//       nextSlide();
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [autoPlay, currentSlide]);

//   function handleTouchStart(event) {
//     touchStartX.current = event.touches[0].clientX;
//   }

//   function handleTouchEnd(event) {
//     if (touchStartX.current === null) return;

//     const difference = touchStartX.current - event.changedTouches[0].clientX;

//     if (difference > 50) {
//       nextSlide();
//       setAutoPlay(false);
//     }

//     if (difference < -50) {
//       previousSlide();
//       setAutoPlay(false);
//     }

//     touchStartX.current = null;
//   }

//   const slide = slides[currentSlide];

//   return (
//     <section
//       className="relative overflow-hidden"
//       aria-roledescription="carousel"
//       aria-label="Featured products"
//       onMouseEnter={() => setAutoPlay(false)}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="relative h-screen sm:h-[650px]">
//         {/* Background */}
//         {slides.map((item, index) => (
//           <div
//             key={item.id}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               index === currentSlide
//                 ? "opacity-100"
//                 : "pointer-events-none opacity-0"
//             }`}
//             aria-hidden={index !== currentSlide}
//           >
//             <img
//               src={item.image}
//               alt=""
//               className="h-full w-full object-fill"
//             />

//             <div className="absolute inset-0 " />
//           </div>
//         ))}

//         {/* Content */}
//         <div className="relative z-10 mx-auto flex h-full max-w-7xl items-start px-12 pb-16 pt-8 sm:px-16 sm:pt-10 md:items-center md:px-24 md:py-12 lg:px-28 xl:px-32">
//           <div className="flex w-full flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12">
//             {/* Foreground images */}
//             <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] md:block">
//               <img
//                 src={slide.foregroundImage}
//                 alt=""
//                 className="h-full w-full object-cover object-left"
//               />
//             </div>

//             {/* Text */}
//             <div className="order-2 flex w-full max-w-xl flex-col items-center text-center text-red-700 md:order-1 md:items-start md:text-left">
//               <p className="mb-3 text-xs uppercase tracking-[0.2em] sm:text-sm">
//                 {slide.eyebrow}
//               </p>

//               <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
//                 {slide.title}
//               </h1>

//               <p className="mt-4 max-w-md text-sm sm:text-base md:mt-5 md:text-lg">
//                 {slide.text}
//               </p>

//               <Link
//                 href={slide.href}
//                 className="mt-6 inline-flex border border-white px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black sm:mt-8 sm:px-6 sm:py-3"
//               >
//                 {slide.buttonText}
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Previous */}
//         <button
//           type="button"
//           onClick={() => {
//             previousSlide();
//             setAutoPlay(false);
//           }}
//           aria-label="Previous slide"
//           className="absolute cursor-pointer  left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 transition hover:bg-white sm:left-4 sm:p-2 md:left-6 md:p-3"
//         >
//           <ChevronLeft className="h-4 w-4  sm:h-5 sm:w-5 md:h-[22px] md:w-[22px]" />
//         </button>

//         {/* Next */}
//         <button
//           type="button"
//           onClick={() => {
//             nextSlide();
//             setAutoPlay(false);
//           }}
//           aria-label="Next slide"
//           className="absolute cursor-pointer right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 transition hover:bg-white sm:right-4 sm:p-2 md:right-6 md:p-3"
//         >
//           <ChevronRight className="h-4 w-4  cursor-pointer sm:h-5 sm:w-5 md:h-[22px] md:w-[22px]" />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//           {slides.map((item, index) => (
//             <button
//               key={item.id}
//               type="button"
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               className={`h-2.5 w-2.5 rounded-full border cursor-pointer border-white transition ${
//                 index === currentSlide ? "bg-white" : "bg-transparent"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
