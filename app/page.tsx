// Modules
import { Home } from "@/app/modules/Home/Home";
import { Footer } from "@/components/Footer";
import { LatestArticles } from "./modules/LatestArticles/LatestArticles";
import { LatestPosts } from "./modules/LatestPosts/LatestPosts";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <Home />
      <LatestArticles />
      <Separator />
      <LatestPosts />
      <Footer />
    </main>
  );
}
