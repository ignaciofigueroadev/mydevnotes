"use client";

// Custom components
import { RichTextComponents } from "@/components/RichTextComponents/RichTextComponents";
import { Spinner } from "@/components/Spinner/Spinner";

// Get articles
import { useArticlesSlug } from "@/utils/getArticleSlug";

// Utils
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const { article, isError, isLoading } = useArticlesSlug(slug);

  if (isLoading) {
    return (
      <Spinner className="flex justify-center items-center min-h-screen" />
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div key={article._id} className="flex flex-col gap-2 pt-12">
      <PortableText value={article.body} components={RichTextComponents} />
    </div>
  );
}
