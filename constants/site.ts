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
