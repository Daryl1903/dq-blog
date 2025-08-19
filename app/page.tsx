import { BlogPostCard } from "@/components/blog-post-card";
import { prisma } from "./utils/db";
import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import { BlogPostsGrid } from "@/components/blog-posts-grid";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorImage: true,
      authorName: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-30">
        <Badge variant="secondary" className="mb-6">
          Latest Updates
        </Badge>
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          Blog Posts
        </h2>
        <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
          Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.
        </p>
      </div>

      <Suspense fallback={<BlogPostsGrid />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard key={item.id} data={item} />
      ))}
    </div>
  );
}