import { getProducts } from "@/lib/products";
import { getMenu } from "@/lib/menu";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Tillatte offentlige innholdstyper.
const publicSheets = {
  produkter: true,
  meny: true,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!Object.hasOwn(publicSheets, type)) {
    return Response.json(
      { error: "Ugyldig innholdstype" },
      {
        status: 400,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  try {
    if (type === "meny") {
      const menu = await getMenu();

      return Response.json(menu, {
        headers: { "Cache-Control": "no-store" },
      });
    }

    const products = await getProducts();

    const publicProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      image: product.image,
      tilgjengelig: product.tilgjengelig,
      kategori: product.kategori,
    }));

    return Response.json(publicProducts, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Public Sheets API failed:", error);

    return Response.json(
      { error: "Kunne ikke hente innhold" },
      {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
