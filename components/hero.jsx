"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 max-w-6xl">
        <div className="">
        <div className="mb-4 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider">
            Hello, I am
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance animate-fade-in-up">
          Sriram S
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-medium mb-6 animate-fade-in-up delay-100">
          AI/ML Engineer
        </h2>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed mb-8 animate-fade-in-up delay-200">
          B.Tech Computer Science (AI & ML) student at{" "}
          <span className="text-foreground font-medium">VIT Chennai</span>.
          Building intelligent systems that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up delay-300">
          <Button
            variant="default"
            size="lg"
            className="group w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto bg-transparent"
          >
            <a href="mailto:sriram32005@gmail.com">Get in Touch</a>
          </Button>
        </div>

        <div className="flex items-center gap-5 animate-fade-in-up delay-400">
          <a
            href="https://linkedin.com/in/sriram32005/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/sriram32005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:sriram32005@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex items-center justify-center md:justify-end animate-fade-in-up delay-500">
          <div className="relative w-82 h-90 md:w-90 md:h-106">
            {/* Slanted rounded square background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/40 rounded-3xl -rotate-6 scale-100" />
            
            {/* Image container */}
            <div className="absolute inset-0 flex items-center justify-center rotate-3">
              <div className="w-82 h-90 md:w-90 md:h-106 rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:shadow-primary/30 transition-all duration-300">
                <img
                  src="/profile.webp"
                  alt="Sriram S"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
