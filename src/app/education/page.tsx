"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EDUCATION = [
  {
    degree: "Master of Science in Software Engineering",
    institution: "University of Technology",
    institutionColor: "from-blue-500 to-indigo-600",
    period: "2022 - Present",
    status: "In Progress",
    description:
      "Specializing in distributed systems and software architecture. Focusing on advanced design patterns and system scalability.",
    highlights: ["System Design", "Cloud Computing", "Machine Learning"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University",
    institutionColor: "from-emerald-500 to-teal-600",
    period: "2014 - 2018",
    status: "Completed",
    description:
      "Graduated with honors. Focused on algorithms, data structures, and web development. Completed thesis on optimizing React applications.",
    highlights: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "CGPA: 3.8/4.0",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "City College",
    institutionColor: "from-amber-500 to-orange-600",
    period: "2012 - 2014",
    status: "Completed",
    description:
      "Science group with specialization in Mathematics and Physics. Achieved distinction in all subjects.",
    highlights: ["Mathematics", "Physics", "Chemistry"],
  },
];

const CERTIFICATIONS = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  { name: "Meta Frontend Developer", issuer: "Meta", year: "2022" },
  { name: "Google Cloud Fundamentals", issuer: "Google", year: "2021" },
];

export default function EducationPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Education
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          My academic journey and certifications
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

        <div className="space-y-0">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-2 top-8 w-5 h-5 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/20 flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-primary-foreground" />
              </div>

              {/* Card */}
              <Card className="p-6 mb-8 border-border/50 bg-card/50 backdrop-blur-xs hover:shadow-lg transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h2>
                    <p
                      className={cn(
                        "text-sm sm:text-base font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                        edu.institutionColor,
                      )}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {edu.period}
                    </span>
                    <Badge
                      variant={
                        edu.status === "In Progress" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      variant="outline"
                      className="text-xs px-2 py-0.5"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <Card
              key={cert.name}
              className="p-4 border-border/50 bg-card/30 text-center hover:shadow-md transition-all"
            >
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-sm">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <Badge variant="secondary" className="mt-2 text-xs">
                {cert.year}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
