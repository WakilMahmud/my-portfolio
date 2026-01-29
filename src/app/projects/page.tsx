"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory management, payment integration, and advanced analytics dashboard.",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Cross-platform mobile application with workout tracking, nutrition logging, and social features for fitness enthusiasts.",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "RESTful API Gateway",
    description:
      "Scalable microservices architecture with authentication, rate limiting, and comprehensive API documentation.",
    category: "API",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Team Collaboration Suite",
    description:
      "Real-time collaboration platform with video conferencing, document sharing, and project management tools.",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    tags: ["Vue.js", "Socket.io", "WebRTC"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Machine learning powered content generation tool with natural language processing and SEO optimization.",
    category: "API",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "Next.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Crypto Wallet App",
    description:
      "Secure cryptocurrency wallet with multi-chain support, real-time price tracking, and decentralized exchange integration.",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
    tags: ["Flutter", "Web3", "Solidity"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const CATEGORIES = ["All", "Web App", "Mobile", "API"];

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    React: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "React Native":
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "Node.js":
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    MongoDB:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    AWS: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    Firebase:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    Redux:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    Python: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    FastAPI: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    PostgreSQL:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    Docker: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    "Vue.js":
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    "Socket.io":
      "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    WebRTC: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    TensorFlow:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    "Next.js": "bg-black text-white dark:bg-white dark:text-black",
    Flutter: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Web3: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    Solidity: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };
  return colors[tag] || "bg-muted text-muted-foreground";
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Featured Projects
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          A showcase of my recent work and technical expertise
        </p>
      </div>

      <Tabs
        defaultValue="All"
        className="w-full space-y-12"
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center">
          <TabsList className="h-11 p-1 bg-muted/40 backdrop-blur-sm border-border/50">
            {CATEGORIES.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-8 h-full data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-xs flex flex-col group transition-all duration-500 hover:ring-2 hover:ring-primary/20 hover:shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-black hover:bg-white/90 border-none shadow-lg"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="shadow-lg"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="p-6 space-y-2 flex-grow">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className={cn(
                          "px-2.5 py-0.5 rounded-md border-none text-[11px] font-bold uppercase tracking-wider",
                          getTagColor(tag),
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 mt-auto border-t border-border/30 bg-muted/5 flex gap-6">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors gap-2 group/link"
                  >
                    <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />{" "}
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors gap-2 group/link"
                  >
                    <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />{" "}
                    Live Demo
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </Tabs>
    </div>
  );
}
