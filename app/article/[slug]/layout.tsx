// Custom components
import { Goback } from "@/components/GoBack/Goback";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes",
  description: "",
};

export default function ArticleDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Goback />
      {children}
    </section>
  );
}
