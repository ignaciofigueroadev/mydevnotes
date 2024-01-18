import AllArticles from "@/app/modules/AllArticles/AllArticles";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes | Articles",
  description:
    "In this section, you are going to find all of the articles created. Check them!",
};

export default function AllArticlesPage() {
  return <AllArticles />;
}
