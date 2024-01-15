// Custom components
import { GoBack } from "@/components/GoBack/GoBack";

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
      <GoBack />
      {children}
    </section>
  );
}
