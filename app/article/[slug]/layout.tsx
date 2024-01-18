// Custom components
import { BackButton } from "@/components/BackButton/BackButton";

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
      <BackButton title="Go Back" />
      {children}
    </section>
  );
}
