import Image from "next/image";

export default function MenuSection({ items = [] }) {
  const categories = ["Subs", "Sides", "Drikke"];

  return (
    <section
      id="menu"
      className="bg-yellow-400 px-5 py-20 text-black "
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-6xl font-black uppercase tracking-tight text-red-700 md:text-8xl">
          Menu
        </h2>

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryItems = items.filter(
              (item) => item.category === category,
            );

            if (categoryItems.length === 0) return null;

            const isDrink = category === "Drikke";

            return (
              <div key={category}>
                <h3 className="mb-8 border-b-4 border-black pb-3 text-3xl font-black uppercase text-red-700 md:text-5xl">
                  {category}
                </h3>

                <div
                  className={`grid gap-y-8 ${
                    isDrink
                      ? "grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4"
                      : "grid-cols-1 gap-x-12 sm:grid-cols-2 md:grid-cols-3"
                  }`}
                >
                  {categoryItems.map((item) => (
                    <article
                      key={item.id}
                      className={`overflow-hidden rounded-xl bg-yellow-300 ${
                        isDrink ? "flex flex-row" : ""
                      }`}
                    >
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
                          <h4
                            className={
                              isDrink
                                ? "text-base font-extrabold uppercase leading-tight break-normal hyphens-none whitespace-normal"
                                : "text-xl font-extrabold uppercase"
                            }
                          >
                            {item.name}
                          </h4>

                          <span className="shrink-0 text-base font-bold sm:text-lg">
                            {item.price} kr
                          </span>
                        </div>

                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
