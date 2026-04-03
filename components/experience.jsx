"use client";

import { Globe, Code, Leaf } from "lucide-react";
import { title } from "process";

const experiences = [
  {
    title: "Associate Director, International Service",
    organization: "Rotaract Club, VIT Chennai",
    period: "2025 - Present",
    description:
      "Leading international service initiatives and coordinating with global Rotaract chapters.",
    icon: Globe,
  },
  {
    title: "Member",
    organization: "Google Developer Groups (GDG)",
    period: "2024 - 2025",
    description:
      "Participated in 5+ webinars on AI/ML and web development.",
    icon: Code,
  },
  {
    title: "Assistant Research Intern",
    organization: "Australian National University (ANU)",
    period: "2025 - present",
    description:
      "Processing hyperspectral plant images using Python and OpenCV to analyze plant health.",
    icon: Leaf,
  }
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-card/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border/50 ml-4 hidden sm:block" />
        </div>

        <div className="grid  gap-6">
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={exp.title}
                className="group p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <exp.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-foreground">
                        {exp.title}
                      </h4>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary text-xs mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
{/* 
          <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-4">
              Academic Highlights
            </h4>
            <div className="space-y-3 flex flex-col justify-between">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-sm text-muted-foreground">Current CGPA</span>
                <span className="text-lg font-bold text-primary">9.56</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-sm text-muted-foreground">Class 12 (CBSE)</span>
                <span className="text-lg font-bold text-primary">96.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-sm text-muted-foreground">Class 10 (CBSE)</span>
                <span className="text-lg font-bold text-primary">90.8%</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
