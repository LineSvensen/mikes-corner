import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

export default function HeroBanner() {
  return (
    <section className="relative portrait:md:flex portrait:md:items-center overflow-hidden bg-mc-yellow-dark min-h-[calc(100svh-62px)] wide:flex wide:h-[calc(100svh-62px)] wide:min-h-[560px]">
      {/* Background */}
      {/* <img
        src="/images/Herobanner/mikes-yellow.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      /> */}

      {/* Food image, mobile: along the bottom, under the info bar */}
      <img
        src="/images/Herobanner/mob-food-image.webp"
        alt=""
        className="pointer-events-none portrait:md:h-[420px] absolute bottom-[10%] left-0 z-0 h-[240px] w-full object-cover object-top wide:hidden"
      />

      {/* Food image, desktop: right side, over the info bar */}
      <img
        src="/images/Herobanner/food-image.webp"
        alt=""
        className="pointer-events-none absolute right-[-30px] top-1/2 z-20 hidden h-[125%] w-[75%] -translate-y-1/2 object-cover object-left wide:block"
      />

      {/* Content */}
      <div className="relative z-30  portrait:md:w-full portrait:md:justify-center portrait:md:pb-[500px] flex flex-col items-center gap-6 px-6 pb-[260px] pt-16 lg:pt-4 text-center wide:w-[55%] wide:justify-center lg:gap-8 wide:px-10 wide:pb-24 wide:pt-8">
        <img
          src="/images/Herobanner/mikes-corner-logo.webp"
          alt="Mike's Corner"
          className="h-8 sm:h-13   self-center  wide:h-13 wide:self-center portrait:md:h-20"
        />

        <h1 className="flex portrait:md:text-5xl items-center gap-3 text-3xl   lg:pt-2 font-bold uppercase leading-tight text-mc-black [text-shadow:2px_2px_0_#fff] sm:text-4xl wide:text-4xl font-bowlby-one">
          {/* <svg
            viewBox="0 0 40 40"
            className="h-8 w-8 shrink-0 wide:h-10 wide:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 22 L16 26 M8 10 L18 18 M22 4 L24 16" />
          </svg> */}
          Food, drinks &amp; good vibes
        </h1>

        <Link
          href="/#menu"
          className="rounded-full bg-mc-red shadow-lg shadow-mc-black/10 px-8 py-3 mt-0 text-lg  font-bowlby-one tracking-wider uppercase text-white transition hover:bg-mc-red-hover wide:px-9 wide:text-xl   "
        >
          See menu
        </Link>

        <div className="flex flex-col items-center gap-3 mt-2 lg:mt-0 ">
          <a
            href="https://ig.me/m/mikescorner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 shadow-lg shadow-mc-black/10 border-mc-black px-5 py-2 text-base lg:text-lg font-bold uppercase text-mc-black transition hover:bg-mc-black hover:text-[#FAC800] wide:text-lg"
          >
            <FaInstagram className="h-8 w-8 " aria-hidden="true" />
            Book party, event or catering
          </a>

          <a
            href="https://instagram.com/mikescorner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase underline-offset-4   py-2 px-4  mt-2 text-mc-black underline sm:text-sm lg:text-base"
          >
            Check out our upcoming events @mikescorner
          </a>
        </div>
      </div>

      {/* Info bar */}
      <div className="absolute inset-x-0 h-24 portrait:md:h-34 shadow-lg shadow-mc-black w-full flex items-center justify-center wide:justify-between bottom-0 z-20 bg-mc-beige">
        <div className="flex items-center justify-between gap-10 sm:gap-12 px-2 py-3 text-sm font-medium uppercase text-mc-black wide:w-[54%] wide:justify-center min-[890px]:gap-16 wide:py-4 min-[700px]:text-base">
          <div className="flex items-center font-bowlby-one text-mc-black/90 gap-4 lg:pr-8">
            <FaLocationDot
              className="h-6 h-6 sm:h-8 sm:w-8 shrink-0"
              aria-hidden="true"
            />
            <p>
              Operagata 77D
              <br />
              0194 Oslo
            </p>
          </div>

          <p className="flex items-center font-bowlby-one lg:pl-8 text-mc-black/90 gap-4">
            Mon-Fri: 11-19
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
