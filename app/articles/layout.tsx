// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes | Articles",
  description:
    "In this section, you are going to find all of the articles created. Check them!",
};

export default function AllArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
