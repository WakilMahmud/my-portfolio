"use client";

import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const EXPERIENCES = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    companyColor: "from-violet-500 to-purple-600",
    period: "2021 - Present",
    achievements: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced application load time by 60% through optimization",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations Inc.",
    companyColor: "from-amber-500 via-orange-500 to-red-500",
    period: "2019 - 2021",
    achievements: [
      "Built RESTful APIs and integrated third-party services",
      "Implemented automated testing achieving 90% code coverage",
      "Collaborated with design team to create responsive UIs",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Hub",
    companyColor: "from-cyan-500 via-blue-500 to-indigo-500",
    period: "2018 - 2019",
    achievements: [
      "Developed responsive websites using modern frameworks",
      "Participated in agile development processes",
      "Gained experience in version control and deployment",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Experience
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-2 top-8 w-5 h-5 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/20" />

              {/* Card */}
              <Card className="p-6 mb-8 border-border/50 bg-card/50 backdrop-blur-xs hover:shadow-lg transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.title}
                    </h2>
                    <p
                      className={cn(
                        "text-sm sm:text-base font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                        exp.companyColor,
                      )}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Separator (except for the last item) */}
              {index < EXPERIENCES.length - 1 && (
                <Separator className="my-0 -mt-4 ml-4 bg-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
