"use client";

// Custom components
import { SkeletonArticleDetails } from "@/app/modules/Skeletons/SkeletonArticleDetails";
import { RichTextComponents } from "@/components/RichTextComponents/RichTextComponents";

// Get articles
import { useArticlesSlug } from "@/hooks/useArticleSlug";

// Utils
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const { article, isError, isLoading } = useArticlesSlug(slug);

  if (isLoading) {
    return <SkeletonArticleDetails />;
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
