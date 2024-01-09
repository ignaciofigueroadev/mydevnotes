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
    <div key={article._id} className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 min-h-screen max-w-screen pt-10">
        <div className="h-full p-12 md:p-28 w-full rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 ">
          <div className="flex flex-col text-center gap-4 h-full w-full items-center justify-center">
            <h3 className="text-2xl font-black sm:text-sm">{article.title}</h3>
            <p className="sm:text-sm">{article.description}</p>
          </div>
        </div>
        <PortableText value={article.body} components={RichTextComponents} />
      </div>
    </div>
  );
}
