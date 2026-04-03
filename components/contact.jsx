"use client";

import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm mb-3 block">
          05. Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looking for internship opportunities in AI/ML and software
          development. Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          <a
            href="mailto:sriram32005@gmail.com"
            className="group flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground truncate">
                sriram32005@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/sriram32005/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium text-foreground">sriram32005</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        <Button size="lg" className="group" asChild>
          <a href="mailto:sriram32005@gmail.com">
            Say Hello
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </section>
  );
}
