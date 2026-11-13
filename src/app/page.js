import HeroBanner from "@/components/Herobanner";
import MenuSection from "@/components/MenuSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";

import { getMenu } from "@/lib/menu";

export const dynamic = "force-dynamic";

export default async function Home() {
  const menu = await getMenu();

  return (
    <div>
      <main>
        <HeroBanner />
        <MenuSection items={menu} />
        <TrustSection />
        <ContactSection />
      </main>
    </div>
  );
}
