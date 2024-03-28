// Modules
import { HomeSection } from "@/app/modules/home-section";
import { LatestArticlesSection } from "./modules/latest-articles-section";
import { LatestPostsSection } from "./modules/latest-posts-section";

// Components
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <section>
      <HomeSection />
      <LatestArticlesSection />
      <Separator />
      <LatestPostsSection />
      <Footer />
    </section>
  );
}
