"use client";

import { GraduationCap, MapPin, Award, Globe } from "lucide-react";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech CSE (AI & ML)",
    sub: "VIT Chennai - CGPA: 9.56",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tiruvannamalai",
    sub: "Tamil Nadu, India",
  },
  {
    icon: Award,
    title: "Class 12",
    value: "96.2%",
    sub: "CBSE Board",
  },
  {
    icon: Globe,
    title: "Languages",
    value: "English, Tamil",
    sub: "German (Basic)",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="flex-1 h-px bg-border/50 ml-4 hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Computer Science student specializing in{" "}
              <span className="text-primary font-medium">
                Artificial Intelligence & Machine Learning
              </span>{" "}
              at Vellore Institute of Technology, Chennai.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently focused on building intelligent systems for emotion
              recognition, network security, and healthcare diagnostics. I
              believe in the power of AI to transform industries and improve
              lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I serve as{" "}
              <span className="text-foreground font-medium">
                Associate Director of International Service
              </span>{" "}
              at Rotaract Club, VIT Chennai.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {infoCards.map((card, idx) => (
              <div
                key={card.title}
                className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{card.title}</p>
                <p className="text-sm font-semibold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
