// useArticlesSlug.ts
import { groq } from "next-sanity";
import useSWR from "swr";
import { client } from "../sanity/lib/client";

const fetchArticleData = async (slug: string) => {
  const result = await client.fetch(
    groq`
      *[_type == "article" && slug.current == $slug][0]{
        ...,
        "mainImage": mainImage.asset->url,
        author->,
        categories[]->
      }`,
    { slug }
  );
  return result;
};

export function useArticlesSlug(slug: string) {
  const { data, error } = useSWR(slug, () => fetchArticleData(slug), {
    revalidateOnFocus: true,
  });

  return {
    article: data,
    isLoading: !error && !data,
    isError: error,
  };
}
