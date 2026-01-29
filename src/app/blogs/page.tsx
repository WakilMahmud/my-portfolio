"use client";

import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BLOG_POSTS = [
  {
    title: "Building Scalable React Applications with Clean Architecture",
    excerpt:
      "Learn how to structure your React projects for maintainability and scalability using clean architecture principles.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    slug: "#",
  },
  {
    title: "The Complete Guide to TypeScript Generics",
    excerpt:
      "Master TypeScript generics and learn how to write type-safe, reusable code that scales with your application.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
    slug: "#",
  },
  {
    title: "Next.js 14: What's New and How to Migrate",
    excerpt:
      "Explore the latest features in Next.js 14 including App Router improvements, Server Actions, and more.",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "Next.js",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    slug: "#",
  },
  {
    title: "Design Patterns Every Frontend Developer Should Know",
    excerpt:
      "From Observer to Factory, learn the essential design patterns that will level up your frontend development skills.",
    date: "2023-12-10",
    readTime: "15 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    slug: "#",
  },
  {
    title: "Optimizing Web Performance: A Practical Guide",
    excerpt:
      "Discover techniques to improve your website's loading speed, Core Web Vitals, and overall user experience.",
    date: "2023-11-25",
    readTime: "9 min read",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "#",
  },
  {
    title: "Introduction to System Design for Frontend Engineers",
    excerpt:
      "Breaking into system design as a frontend developer. Learn the fundamentals that will help you grow into a software architect role.",
    date: "2023-11-15",
    readTime: "14 min read",
    category: "System Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    slug: "#",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    React: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    TypeScript:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "Next.js": "bg-gray-800 text-white dark:bg-white dark:text-gray-800",
    Architecture:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    Performance:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    "System Design":
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

export default function BlogsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Blog
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on web development
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <Card
            key={index}
            className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-xs flex flex-col group transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-primary/10"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <Badge
                className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}
              >
                <Tag className="h-3 w-3 mr-1" />
                {post.category}
              </Badge>
            </div>

            {/* Content */}
            <CardHeader className="p-6 pb-2 flex-grow">
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mt-2">
                {post.excerpt}
              </p>
            </CardHeader>

            {/* Meta */}
            <CardContent className="px-6 pb-4 pt-0">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className="px-6 pb-6 pt-0 mt-auto">
              <Button variant="ghost" className="p-0 h-auto group/link" asChild>
                <Link
                  href={post.slug}
                  className="flex items-center gap-2 text-primary font-semibold"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>
    </div>
  );
}
