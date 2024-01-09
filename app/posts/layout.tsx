// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes | Posts",
  description: "Here you can find all of the posts created. Check them!",
};

export default function PostsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
