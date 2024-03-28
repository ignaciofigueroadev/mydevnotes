export const home = Object.freeze({
  title: "My Dev Notes",
  description: "A blog built by a developer for developers",
});

export const allPosts = Object.freeze({
  title: "Posts",
  description:
    "In this section you are going to find quick posts as tips and advices",
});

export const allArticles = Object.freeze({
  title: "Articles",
  description:
    "In this section you are going to find articles about tech and coding. Check them!",
  fallbackNoArticlesFound:
    "No articles found. Please try a different search term.",
});

export const navItems = Object.freeze([
  {
    title: "Home",
    href: "/",
    icon: "home",
  },
  {
    title: "Posts",
    href: "/posts",
    icon: "post",
  },
  {
    title: "Articles",
    href: "/articles",
    icon: "article",
  },
]);

export const footer = Object.freeze({
  title: "My Dev Notes",
  subtitle: "Coded by",
  author: "Ignacio Figueroa",
  href: "https://ignaciofigueroadev.vercel.app",
});

export const errors = Object.freeze({
  globalError: "Something went wrong!",
  tryAgainButton: "Try again",
});

export const notFound = Object.freeze({
  notFoundErrorCode: "404",
  notFoundTitle: "Oops! This page could not be found.",
  notFoundDescription:
    "Sorry but the page you are looking for does not exist, was not created, have been removed, name changed or is temporarily unavailable",
});
