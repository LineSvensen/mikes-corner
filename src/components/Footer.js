import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-mc-black/10 bg-mc-beige text-mc-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main footer */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="flex shrink-0 justify-center">
            <Image
              src="/images/herobanner/mikes-corner-logo.webp"
              alt="Mike's Corner"
              width={200}
              height={50}
              className="h-auto w-40 sm:w-50 lg:w-80"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-8">
            {/* Address and opening hours */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-sm uppercase sm:text-base lg:pr-4 lg:gap-x-16">
              {/* Address */}
              <div className="flex items-center gap-3 font-bowlby-one text-mc-black/90">
                <FaLocationDot
                  className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />

                <p>
                  Operagata 77D
                  <br />
                  0194 Oslo
                </p>
              </div>

              {/* Opening hours */}
              <p className="font-bowlby-one text-mc-black/90">
                Mon-Fri: 11-19
                <br />
                Sat-Sun: 12-19
              </p>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center gap-5 text-center">
              {/* Booking button */}
              <a
                href="https://ig.me/m/mikescorner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-mc-black bg-non px-5 py-3 text-sm font-bold uppercase text-mc-black transition-all duration-200 sm:text-base lg:text-lg
                 
                hover:-translate-y-1 hover:bg-mc-black hover:text-mc-beige"
              >
                <FaInstagram
                  className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
                Book party, event or catering
              </a>

              {/* Upcoming events */}
              <a
                href="https://instagram.com/mikescorner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs  underline underline-offset-8 gap-2 flex flex-row items-center transition-opacity hover:opacity-70 sm:text-sm lg:text-base"
              >
                dont forget to check out our upcoming events! {" "}
                 <FaInstagram className="h-5 w-5 " aria-hidden="true" />{" "}
                @mikescorner
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 border-t border-mc-black/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-mc-black/80">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            {/* Kodera credit */}
            <div className="flex items-center justify-center gap-2 text-sm text-mc-black/70">
              <span>Kodet med ❤ av kvinner i</span>

              <a
                href="https://kodera.no"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pb-1"
                aria-label="Kodera"
              >
                <Image
                  src="/images/kodera-logo-01.svg"
                  alt="Kodera"
                  width={70}
                  height={24}
                  className="h-auto w-11"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
