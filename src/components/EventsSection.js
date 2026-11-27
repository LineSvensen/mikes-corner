import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

// Plakatene ligger i /public/images/Herobanner/.
// width/height er originalstørrelsen, slik at hver plakat beholder sitt eget format.
// `size` og `pos` gjelder fra lg (1024px) og opp (collage).
// Under lg scroller plakatene sidelengs.
const events = [
  {
    src: "/images/Herobanner/nelly-moar.jpg",
    width: 1184,
    height: 1536,
    alt: "Plakat for Nelly Moar x Mike's Corner, akustisk livesession",
    label: "Nelly Moar",
    date: "28. oktober 2026",
    size: "lg:w-[24%]",
    pos: "rotate-[-3deg] lg:left-0 lg:top-[4%] lg:z-10 lg:rotate-[-5deg]",
  },
  {
    src: "/images/Herobanner/aavery.jpg",
    width: 2064,
    height: 2576,
    alt: "Plakat for Aavery x Mike's Corner",
    label: "Aavery",
    date: "10. november 2026",
    size: "lg:w-[24%]",
    pos: "rotate-[2deg] lg:left-[19%] lg:top-[36%] lg:z-20 lg:rotate-[3deg]",
  },
  {
    src: "/images/Herobanner/quiz.jpg",
    width: 1080,
    height: 1350,
    alt: "Plakat for quiz med Eric og Thomas",
    label: "Quiz med Eric og Thomas",
    date: "1. og 8. juni 2026",
    size: "lg:w-[24%]",
    pos: "rotate-[-2deg] lg:left-[38%] lg:top-0 lg:z-10 lg:rotate-[-2deg]",
  },
  {
    src: "/images/Herobanner/baon.jpg",
    width: 1136,
    height: 1408,
    alt: "Plakat for Tito Richie's Baon Special",
    label: "Tito Richie's Baon Special",
    date: "22. november 2026",
    size: "lg:w-[24%]",
    pos: "rotate-[3deg] lg:left-[57%] lg:top-[34%] lg:z-20 lg:rotate-[4deg]",
  },
  {
    src: "/images/Herobanner/preparty.jpg",
    width: 1380,
    height: 1717,
    alt: "Plakat for Skinny E's Preparty med Rockefeller",
    label: "Preparty med Rockefeller",
    date: "2026",
    size: "lg:w-[24%]",
    pos: "rotate-[-2deg] lg:left-[76%] lg:top-[6%] lg:z-10 lg:rotate-[-4deg]",
  },
  // Tre mindre plakater som fyller hullene: to i toppen, én i bunnen
  {
    src: "/images/Herobanner/afterworkimpro.jpg",
    width: 1381,
    height: 1709,
    alt: "Plakat for Afterworkimpro med Markus og Sara",
    label: "Afterworkimpro",
    date: "2025",
    size: "lg:w-[14%]",
    pos: "rotate-[3deg] lg:left-[24.5%] lg:top-[4%] lg:z-30 lg:rotate-[3deg]",
  },
  {
    src: "/images/Herobanner/kjaere-oslo.jpg",
    width: 1440,
    height: 1915,
    alt: "Plakat for filmen Kjære Oslo",
    label: "Premierevisning av Kjære Oslo (Teaser) og fest",
    date: "2026",
    size: "lg:w-[14%]",
    pos: "rotate-[2deg] lg:left-[61%] lg:top-[3%] lg:z-30 lg:rotate-[-3deg]",
  },
  {
    src: "/images/Herobanner/hvitmalt-gjerde.jpg",
    width: 1440,
    height: 1800,
    alt: "Plakat for Hvitmalt Gjerde, hangout med merch og musikk",
    label: "Hvitmalt Gjerde",
    date: "25. oktober 2025",
    size: "lg:w-[14%]",
    pos: "rotate-[-2deg] lg:left-[43%] lg:top-[53%] lg:z-30 lg:rotate-[-9deg]",
  },
];

export default function EventsBanner({ instagramUrl = "#" }) {
  return (
    <section id="events"
      className={`${font.className} overflow-hidden bg-[#2b1238] pt-12 pb-4 text-[#f6efe6] lg:pb-10`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 sm:items-start sm:justify-start md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-bowlby-one text-center text-2xl uppercase text-mc-yellow-light sm:text-left sm:text-3xl lg:text-5xl">
            Concerts, quiz and guest chefs.
          </h2>
          <p className="mt-6 max-w-md text-center text-lg tracking-wide  leading-relaxed sm:text-left font-permanent-marker">
            Take a look at some previous events at Mike's Corner
          </p>
        </div>
        <a
          href={instagramUrl}
          className="inline-flex uppercase  font-bowlby-one tracking-wider w-fit text-nowrap rounded-full bg-mc-yellow-light px-6 py-3 font-bold text-[#2b1238]   hover:bg-mc-beige hover:translate-y-[-4px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4f01c] motion-reduce:transition-none"
        >
          Follow us for the next event
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-6xl overflow-visible px-0">
        <ul className="flex snap-x items-center gap-4 overflow-x-auto px-6 pb-5 pt-8 [scrollbar-color:#8a4bb0_#3a1850] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#8a4bb0] [&::-webkit-scrollbar-track]:mx-6 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#3a1850] [&::-webkit-scrollbar]:h-2 lg:relative lg:block lg:aspect-[16/9] lg:snap-none lg:overflow-visible lg:p-0">
          {events.map((e) => (
            <li
              key={e.src}
              className={`group relative w-[62%] shrink-0 snap-center overflow-hidden rounded-md shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] transition duration-300 ease-out hover:z-50 hover:rotate-0 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:w-[40%] md:w-[30%] lg:absolute ${e.size} ${e.pos}`}
            >
              <Image
                src={e.src}
                alt={e.alt}
                width={e.width}
                height={e.height}
                sizes="(min-width: 1152px) 276px, (min-width: 1024px) 24vw, (min-width: 768px) 30vw, 62vw"
                className="block h-auto w-full"
              />
              <div className="absolute inset-x-2 bottom-2 rounded bg-[#2b1238] px-3 py-2 text-sm leading-tight motion-reduce:transition-none lg:opacity-0 lg:transition-opacity lg:duration-200 lg:group-hover:opacity-100">
                <span className="block font-bold">{e.label}</span>
                {e.date && <span className="block opacity-80">{e.date}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import { Bricolage_Grotesque } from "next/font/google";

// const font = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["400", "700", "800"],
//   display: "swap",
// });

// // Plakatene ligger i /public/events/. `pos` gjelder fra md og opp (collage),
// // på mobil scroller de sidelengs med en liten tilt.
// const events = [
//   {
//     src: "/images/Herobanner/nelly-moar.jpg",
//     alt: "Plakat for Nelly Moar x Mike's Corner, akustisk livesession",
//     label: "Nelly Moar",
//     date: "28. oktober",
//     pos: "rotate-[-3deg] md:left-0 md:top-[4%] md:z-10 md:rotate-[-5deg]",
//   },
//   {
//     src: "/images/Herobanner/aavery.jpg",
//     alt: "Plakat for Aavery x Mike's Corner",
//     label: "Aavery",
//     date: "10. november",
//     pos: "rotate-[2deg] md:left-[19%] md:top-[36%] md:z-20 md:rotate-[3deg]",
//   },
//   {
//     src: "/images/Herobanner/quiz.jpg",
//     alt: "Plakat for quiz med Eric og Thomas",
//     label: "Quiz med Eric og Thomas",
//     date: "1. og 8. juni",
//     pos: "rotate-[-2deg] md:left-[38%] md:top-0 md:z-10 md:rotate-[-2deg]",
//   },
//   {
//     src: "/images/Herobanner/baon.jpg",
//     alt: "Plakat for Tito Richie's Baon Special",
//     label: "Tito Richie's Baon Special",
//     date: "22. november",
//     pos: "rotate-[3deg] md:left-[57%] md:top-[34%] md:z-20 md:rotate-[4deg]",
//   },
//   {
//     src: "/images/Herobanner/preparty.jpg",
//     alt: "Plakat for Skinny E's Preparty med Rockefeller",
//     label: "Preparty med Rockefeller",
//     date: "",
//     pos: "rotate-[-2deg] md:left-[76%] md:top-[6%] md:z-10 md:rotate-[-4deg]",
//   },
// ];

// export default function EventsBanner({ instagramUrl = "#" }) {
//   return (
//     <section
//       className={`${font.className} overflow-hidden bg-[#2b1238] pt-12 pb-4 text-[#f6efe6] md:pt-12 md:pb-0`}
//     >
//       <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between  justify-center items-center  sm:justify-start sm:items-left">
//         <div className="max-w-3xl">
//           <h2 className="text-2xl font-bowlby-one uppercase text-mc-yellow-light sm:text-3xl lg:text-5xl text-center sm:text-left ">
//             Concerts, quiz and guest chefs.
//           </h2>
//           <p className="mt-6 max-w-md text-lg leading-relaxed text-center sm:text-left">
//             Vi har events på Mike's Corner. Her er noe av det som har vært.
//           </p>
//         </div>
//         <a
//           href={instagramUrl}
//           className="inline-flex w-fit  text-nowrap rounded-full bg-mc-yellow-light px-6 py-3 font-bold text-[#2b1238] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4f01c] motion-reduce:transition-none"
//         >
//           Følg oss for neste event
//         </a>
//       </div>

//       <div className="mx-auto  max-w-6xl px-0 mt-10 overflow-visible">
//         <ul className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-6 md:relative md:mx-0 md:block md:aspect-[16/9] md:snap-none md:overflow-visible md:p-0">
//           {events.map((e) => (
//             <li
//               key={e.src}
//               className={`group relative aspect-[4/5] w-[62%] shrink-0 snap-center overflow-hidden rounded-md shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] transition duration-300 ease-out hover:z-50 hover:rotate-0 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:w-[40%] md:absolute md:w-[24%] ${e.pos}`}
//             >
//               <Image
//                 src={e.src}
//                 alt={e.alt}
//                 fill
//                 sizes="(min-width: 1152px) 276px, (min-width: 768px) 24vw, 62vw"
//                 className="object-cover"
//               />
//               <div className="absolute inset-x-2 bottom-2 rounded bg-[#2b1238] px-3 py-2 text-sm leading-tight md:opacity-0 md:transition-opacity md:duration-200 md:group-hover:opacity-100 motion-reduce:transition-none">
//                 <span className="block font-bold">{e.label}</span>
//                 {e.date && <span className="block opacity-80">{e.date}</span>}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }
