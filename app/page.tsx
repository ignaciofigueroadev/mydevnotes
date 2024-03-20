// Modules
import { Footer } from "@/components/Footer";
import { Home } from "./modules/Home";
import { LatestArticles } from "./modules/LatestArticles";
import { LatestPosts } from "./modules/LatestPosts";

// Components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <section>
      <Home />
      <LatestArticles />
      <Separator />
      <LatestPosts />
      <Footer />
    </section>
  );
}
