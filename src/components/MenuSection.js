export default function MenuSection({ items = [] }) {
  const categories = ["Subs", "Sides", "Drikke"];

  return (
    <section id="menu" className="bg-yellow-400 px-5 py-20 text-black">
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

            return (
              <div key={category}>
                <h3 className="mb-8 border-b-4 border-black pb-3 text-3xl font-black uppercase text-red-700 md:text-5xl">
                  {category}
                </h3>

                <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                  {categoryItems.map((item) => (
                    <article key={item.id}>
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-xl font-extrabold uppercase">
                          {item.name}
                        </h4>

                        <span className="shrink-0 text-lg font-bold">
                          {item.price} kr
                        </span>
                      </div>

                      {item.description && (
                        <p className="mt-2 max-w-md text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
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
