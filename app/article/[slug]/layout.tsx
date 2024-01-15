// Custom components
import { GoBack } from "@/components/GoBack/GoBack";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes",
  description: "This is an article",
};

export default function ArticleDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <GoBack title="Go Back" />
      {children}
    </section>
  );
}
