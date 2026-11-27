import Image from "next/image";

export default function MenuSection({ items = [] }) {
  const categories = ["Subs", "Sides", "Drikke"];

  return (
    <section
      id="menu"
      className="bg-mc-yellow-dark px-5 py-8 pb-20 text-mc-black "
    >
      <div className="mx-auto max-w-6xl">
        <svg viewBox="0 0 340 100" className="w-full max-w-lg mx-auto">
          <defs>
            <path id="textCurve" d="M 15,125 Q 170,-25 325,125" fill="none" />
          </defs>

          <text
            className="font-bowlby-one   fill-mc-red uppercase drop-shadow-[-5px_4px_0px_#fff1c7]"
            fontSize="44"
            textAnchor="middle"
          >
            <textPath href="#textCurve" startOffset="50%" alt="Menu">
              MENU
            </textPath>
          </text>
        </svg>

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryItems = items.filter(
              (item) => item.category === category,
            );

            if (categoryItems.length === 0) return null;

            const isDrink = category === "Drikke";

            return (
              <div key={category}>
                <h3 className="mb-8 border-b-4 border-mc-green pb-3 text-3xl font-black uppercase text-mc-blue md:text-3xl">
                  {category}
                </h3>

                <div
                  className={`grid gap-y-8 ${
                    isDrink
                      ? "grid-cols-1 min-[600px]:grid-cols-2 min-[880px]:grid-cols-3  min-[1107px]:grid-cols-4 gap-x-4 gap-y-4"
                      : "grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {categoryItems.map((item) => {
                    const isSpecial =
                      category === "Subs" && String(item.id) === "1";

                    // ${isSpecial ? "bg-mc-red " : "bg-mc-yellow-light"}

                    return (
                      <article
                        key={item.id}
                        className={`relative overflow-hidden rounded-xl bg-mc-yellow-light
                        
                        ${isDrink ? "flex flex-row" : ""}
                        `}
                      >
                        {isSpecial && (
                          <span className="absolute -left-[30%] top-4 z-10 w-[140%] -rotate-[10deg]   bg-mc-red py-2 text-center text-sm uppercase text-mc-yellow-dark font-bowlby-one sm:text-base md:text-lg lg:text-xl">
                            This month's special
                          </span>
                        )}
                        {item.image && (
                          <div
                            className={`relative shrink-0 ${
                              isDrink
                                ? "aspect-square w-24 sm:w-28 lg:w-32"
                                : "aspect-[4/3] lg:aspect-[4/4] w-full"
                            }`}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes={
                                isDrink
                                  ? "(max-width: 639px) 96px, (max-width: 1023px) 112px, 128px"
                                  : "(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
                              }
                              className="object-cover"
                            />
                          </div>
                        )}

                        <div
                          className={
                            isDrink
                              ? "flex min-w-0 flex-1 flex-col justify-center p-4"
                              : "p-6"
                          }
                        >
                          <div
                            className={
                              isDrink
                                ? "flex flex-col gap-1"
                                : "flex items-start justify-between gap-2 sm:gap-4"
                            }
                          >
                            {/* // ${isSpecial ? "text-mc-yellow-dark" : "text-mc-red"} */}

                            <h4
                              className={`font-bowlby-one uppercase text-mc-red 
                               
                            ${
                              isDrink
                                ? "text-base font-bowlby-one uppercase leading-tight break-normal hyphens-none whitespace-normal text-mc-red"
                                : "text-xl  font-bowlby-one uppercase text-mc-red"
                            }
                                `}
                            >
                              {item.name}
                            </h4>
                            {/* ${isSpecial ? "text-mc-yellow-dark" : "text-mc-red"} */}
                            <span
                              className={`font-bowlby-one uppercase text-nowrap leading-tight text-mc-red
    
    ${isDrink ? "mt-2 text-sm" : "pt-1 text-base lg:text-lg"}
  `}
                            >
                              {item.price} Kr
                            </span>
                          </div>
                          <p
                            className={
                              isDrink
                                ? "mt-4 text-sm  font-permanent-marker text-mc-black/70    leading-5"
                                : "mt-4 text-base sm:text-lg lg:text-xl font-permanent-marker text-mc-black/90    leading-5"
                            }
                          >
                            {item.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
