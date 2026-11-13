import "server-only";

import { unstable_cache } from "next/cache";
import { getSheetData } from "@/lib/google-sheets";

// Gjør Google Sheets-data om til menyobjekter.
function validateMenu(rows) {
  if (!Array.isArray(rows)) {
    throw new Error("Ugyldige menydata fra Google Sheets");
  }

  return rows
    .map((row) => {
      const price = Number(String(row.pris ?? "").replace(",", "."));

      return {
        id: String(row.id ?? "").trim(),
        name: String(row.navn ?? "").trim(),
        description: String(row.beskrivelse ?? "").trim(),
        price,
        category: String(row.kategori ?? "").trim(),
        image: String(row.bilde ?? "").trim(),
        active:
          String(row.aktiv ?? "")
            .trim()
            .toUpperCase() === "TRUE",
      };
    })
    .filter(
      (item) =>
        item.id &&
        item.name &&
        item.category &&
        Number.isFinite(item.price) &&
        item.price >= 0 &&
        item.active,
    );
}

// Henter menyen fra Google Sheets med 60 sekunders cache.
const getCachedMenu = unstable_cache(
  async () => {
    const rows = await getSheetData("Meny");
    return validateMenu(rows);
  },
  ["mikes-corner-menu", process.env.GOOGLE_SHEET_ID ?? ""],
  {
    revalidate: 60,
    tags: ["menu"],
  },
);

export async function getMenu() {
  return getCachedMenu();
}
