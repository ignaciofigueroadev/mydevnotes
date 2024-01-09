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
    <main className="flex flex-col gap-12">
      <Header />
      <Home />
      <Separator />
      <h2>Latest Articles</h2>
      <section>
        <LatestArticles />
      </section>
      <Separator />
      <h2>Latest Posts</h2>
      <section>
        <LatestPosts />
      </section>
    </main>
  );
}
