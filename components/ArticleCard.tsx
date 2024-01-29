"use client";

import { useEffect, useState } from "react";

// Shadcs/ui components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

// Icon
import { ArrowUpRight } from "lucide-react";

// Next imports
import Link from "next/link";

// Sanityi
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface ArticleCardProps {
  author?: string;
  author_image?: string;
  title?: string;
  publishedAt: string;
  description?: string;
  slug?: {
    current: string;
  };
  className?: string;
  alt?: string;
  categories?: {
    _ref: any;
    title?: string;
  }[];
}

export function ArticleCard({
  author,
  author_image,
  title,
  publishedAt,
  description,
  slug,
  className,
  alt,
  categories,
}: ArticleCardProps) {
  const [categoryData, setCategoryData] = useState<{ title?: string }[]>([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      if (categories) {
        const categoryDetails = await Promise.all(
          categories.map((categoryRef) =>
            client.fetch(groq`*[_id == $id][0]`, { id: categoryRef._ref })
          )
        );
        setCategoryData(categoryDetails);
      }
    };
    fetchCategoryData();
  }, [categories]);

  const originalDate = new Date(publishedAt);
  const formattedDate = originalDate.toLocaleDateString();

  return (
    <Link
      href={`/article/${slug?.current}`}
      className={`cursor-default ${className}`}
    >
      <Card className="group hover:-translate-y-2 hover:border-purple-600 border-[.0625rem] transition-[border, translate] duration-100 flex-1 article-fade">
        <div className="hover:shadow-dark-box-shadow-card rounded-md">
          <CardHeader className="flex flex-row justify-between items-center relative">
            <p className="text-xs">{formattedDate}</p>
            <div className="flex justify-center items-center gap-3 text-xs">
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read More
              </p>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-fuchsia-700 group-hover:to-violet-400 group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text text-pretty text-lg">
              {title}
            </CardTitle>
            <CardDescription className="leading-10 text-pretty text-xs">
              {description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-5 md:flex-col  md:justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={author_image} alt={alt} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-xs">{author}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {categoryData && categoryData.length > 0
                ? categoryData.map((category, index) => (
                    <Badge variant="chip" key={index}>
                      {category.title || "No title"}
                    </Badge>
                  ))
                : null}
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
