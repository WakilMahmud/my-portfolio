"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory management and analytics.",
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
      "Cross-platform mobile app with workout tracking and social features.",
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
      "Scalable microservices with authentication and rate limiting.",
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
      "Real-time collaboration platform with video and document sharing.",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    tags: ["Vue.js", "Socket.io", "WebRTC"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered content generation with NLP and SEO optimization.",
    category: "API",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "Next.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Crypto Wallet App",
    description: "Secure multi-chain wallet with real-time price tracking.",
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
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
          Featured Projects
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          A showcase of my recent work and technical expertise
        </p>
      </div>

      <Tabs
        defaultValue="All"
        className="w-full space-y-6"
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center">
          <TabsList className="h-10 p-1 bg-muted/40 backdrop-blur-sm">
            {CATEGORIES.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-5 h-full text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/40 bg-card group transition-all duration-300 hover:shadow-xl hover:border-primary/20"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/90 text-black rounded-md hover:bg-white transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Demo
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className={cn(
                          "px-2 py-0.5 text-[10px] font-semibold rounded border-none",
                          getTagColor(tag),
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </Tabs>
    </div>
  );
}
