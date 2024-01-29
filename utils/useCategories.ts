// Sanity
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

// SWR
import useSWR from "swr";

const fetcher = async (url: string) => {
  const data = await client.fetch(url);
  return data;
};

export function useCategories() {
  const { data, error } = useSWR(groq`*[_type=="category"]`, fetcher);

  return {
    categories: data,
    isLoadingCategory: !error && !data,
    isErrorCategory: error,
  };
}
