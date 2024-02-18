// Custom components
import { BackButton } from "@/components/BackButton";
import { Logo } from "@/components/Logo";

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
      <div className="flex justify-between items-center">
        <BackButton title="Go Back" />
        <Logo />
      </div>
      {children}
    </section>
  );
}
