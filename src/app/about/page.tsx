"use client";

import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const INTERESTS = [
  { icon: Code2, label: "Clean Code" },
  { icon: Coffee, label: "Coffee" },
  { icon: Heart, label: "Open Source" },
];

export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          About Me
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          Get to know the person behind the code
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Photo & Quick Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 p-1">
            <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>

          {/* Quick Info Cards */}
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Frontend Engineer</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  BSc in Computer Science
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((interest) => (
              <Badge
                key={interest.label}
                variant="secondary"
                className="px-3 py-1.5 gap-1.5"
              >
                <interest.icon className="h-3.5 w-3.5" />
                {interest.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm{" "}
              <span className="font-semibold text-foreground">
                Wakil Mahmud
              </span>
              , a passionate Frontend Engineer with over 5 years of experience
              in building modern web applications. I specialize in React,
              Next.js, and TypeScript, and I'm constantly exploring new
              technologies to stay at the cutting edge of web development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development started during my university
              years, where I discovered my love for creating intuitive user
              interfaces. Since then, I've worked with startups and established
              companies, helping them build scalable and maintainable
              applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm focused on becoming a Software Architect. I'm
              deeply interested in system design, design patterns, and building
              applications that can scale to millions of users. I believe in
              writing clean, self-documenting code and following best practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me reading tech blogs,
              contributing to open-source projects, or enjoying a good cup of
              coffee while exploring new design trends.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border/50">
            <Card className="border-border/50 bg-card/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">🎯 My Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To create software that improves people's lives and helps
                  businesses grow through elegant solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">💡 My Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To become a Software Architect who designs systems that stand
                  the test of time and scale effortlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
