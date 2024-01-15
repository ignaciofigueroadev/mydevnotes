// Custom components
import { Header } from "@/components/Header/Header";

// Modules
import { Home } from "@/app/modules/Home/Home";
import { LatestArticles } from "./modules/LatestArticles/LatestArticles";
import { LatestPosts } from "./modules/LatestPosts/LatestPosts";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <Header />
      <Home />
      <Separator />
      <LatestArticles />
      <Separator />
      <LatestPosts />
    </main>
  );
}
