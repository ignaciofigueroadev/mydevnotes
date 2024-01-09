import { groq } from "next-sanity";
import useSWR from "swr";
import { client } from "../sanity/lib/client";

const fetcher = async (url: string) => {
  const data = await client.fetch(url);
  return data;
};

export function usePosts() {
  const { data, error } = useSWR(groq`*[_type=="post"]`, fetcher);

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
