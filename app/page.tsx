// Modules
import { Home } from "@/app/modules/Home";
import { Footer } from "@/components/Footer";
import { LatestArticles } from "./modules/LatestArticles";
import { LatestPosts } from "./modules/LatestPosts";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div>
      <Home />
      <LatestArticles />
      <Separator />
      <LatestPosts />
      <Footer />
    </div>
  );
}
