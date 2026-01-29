"use client";

import { ArrowRight, Code2, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-170px)] py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <Sparkles className="h-4 w-4" />
          Available for new opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Wakil Mahmud
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
          Frontend Engineer • Aspiring Software Architect
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, performant, and accessible web experiences.
          Passionate about clean code, modern design patterns, and building
          scalable applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link href="/projects">
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 pt-12 border-t border-border/50 mt-12">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-foreground">5+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-foreground">
              50+
            </p>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-foreground">
              20+
            </p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
