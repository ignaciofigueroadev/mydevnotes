// Modules
import { Home } from "@/app/modules/Home";
import { Footer } from "@/components/Footer";
import { LatestArticles } from "./modules/LatestArticles";
import { LatestPosts } from "./modules/LatestPosts";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="grid m-auto grid-cols-1 gap-6">
      <Home />
      <LatestArticles />
      <Separator />
      <LatestPosts />
      <Footer />
    </div>
  );
}
